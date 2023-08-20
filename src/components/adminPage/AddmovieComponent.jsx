
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase/firebaseconf"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { useState } from "react";
import axios from "axios";


export default function AddmovieComponent() {

    const navigate = useNavigate();
    const [coverUrl, setCoverUrl] = useState("");

    function onSubmit(values) {
        const movieInfo = {
            name: values.movieName,
            description: values.description,
            rating: values.movieRating,
            time: values.movieDuration,
            date: values.releseDate,
            starring: values.starring,
            genres: values.genres,
            tags: values.tags,
            category: values.category,
            cover: coverUrl,
            
        }

        console.log(movieInfo);
        // values.forEach(element => {
        //     if (element === null || element === un) {
        //         alert("fill all details !")
        //     }
        // });

        axios.post("http://localhost:8000/movie-service/new", movieInfo)
            .then(
                response => {
                    console.log(response);
                    alert("movie Added")
                    navigate("/")
                }
            )
    }


    function uploadpost(event) {
        let image = event.target.files[0]
        if (image === null || image === undefined)
            return

        const storageref = ref(storage, image.name)
        // const storageref = ref(storage, `images/${image.name + v4()}`)
        var uploadTask = uploadBytesResumable(storageref, image)
        uploadTask.on(
            "stage_changed",
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setCoverUrl(downloadURL);
                    console.log(coverUrl);
                })
            }
        )
    }



    return (
        <>
            <div className="container">
                {/* <HeaderComponent /> */}
                <Formik
                    initialValues={{}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                    {
                        (props) => (
                            <Form>
                                <div className="container rounded bg-white mt-5 mb-5">
                                    <div className="row">
                                        <div className="col-md-3 border-right">
                                        </div>
                                        <div className="col-md-5 border-right">
                                            <div className="p-3 py-5">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <h4 className="text-right">Add New Movie</h4>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-6"><label className="labels">Movie Name </label><Field name="movieName" type="text" className="form-control" placeholder="movie name"></Field></div>
                                                    <div><label className="labels">Cover Image </label><input type="file" onChange={uploadpost} /></div>
                                                    <div className="col-md-12"><label className="labels">Description </label><Field name="description" as="textarea" className="form-control" placeholder="enter description of the movie"></Field></div>

                                                    <div className="col-md-6"><label className="labels">Movie Rating </label><Field name="movieRating" type="number" className="form-control" placeholder="movie rating"></Field></div>
                                                    <div className="col-md-6"><label className="labels">Movie Duration </label><Field name="movieDuration" type="time" className="form-control" placeholder=""></Field></div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-12"><label className="labels">Relese Date </label><Field name="releseDate" type="date" className="form-control" placeholder=""></Field></div>
                                                    <div className="col-md-12"><label className="labels">Starring </label><Field name="starring" type="text" className="form-control" placeholder=""></Field></div>
                                                    <div className="col-md-12"><label className="labels">Genres </label><Field name="genres" type="text" className="form-control" placeholder="enter state"></Field></div>
                                                    <div className="col-md-12"><label className="labels">Tags </label><Field name="tags" type="text" className="form-control" placeholder="enter pincode"></Field></div>
                                                    <div className="col-md-12"><label className="labels">Category </label><Field name="category" type="text" className="form-control" placeholder="enter mobile no"></Field></div>

                                                </div>

                                                <div className="mt-5 text-center"><button type="submit" className="btn btn-primary profile-button">Add Movie</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div >
        </>
    )
}
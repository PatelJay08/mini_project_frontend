import React, { useState } from "react"
import "./footer.css"
import { storage } from "../firebase/firebaseconf"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid"

const Footer = () => {

  // function uploadpost(event) {
  //   let image = event.target.files[0]
  //   if (image === null || image === undefined)
  //     return

  //   const storageref = ref(storage, image.name)
  //   // const storageref = ref(storage, `images/${image.name + v4()}`)
  //   var uploadTask = uploadBytesResumable(storageref, image)
  //   uploadTask.on(
  //     "stage_changed",
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log('File available at', downloadURL);
  //       })
  //     }
  //   )
  // }



  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Terms of Use</li>
              <li>Privacy-Policy</li>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Watch List</li>
            </ul>
            <p>© 2022 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
          </div>
          <div className='box'>
            <h3>Follow Us</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-github'></i>
            <i className='fab fa-instagram'></i>
          </div>
          {/* <div className='box'>
            <h3>Streamit App</h3>
            <div className='img flexSB'>
              <img src='https://img.icons8.com/color/48/000000/apple-app-store--v3.png' />
              <span>App Store</span>
              <img src='https://img.icons8.com/fluency/48/000000/google-play.png' />
              <span>Google Play Store</span>
            </div>
          </div> */}
          {/* <input type="file" onChange={uploadpost} /> */}
          {/* <button onClick={uploadImage}>Upload Image</button> */}
        </div>
      </footer>
    </>
  )
}

export default Footer

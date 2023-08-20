import React, { useState, useEffect } from "react"
import Homes from "../components/landingPageComponents/MainContainer"
import axios from "axios"

const LandingPage = () => {
  const [rec, setRec] = useState([])

  useEffect(
    ()=> getData(),[]
  )

  function getData() {
    axios.get("http://localhost:8000/movie-service/movies/category/home")
      .then(
        response => {
          console.log(response);
          setRec(response.data)
        }
      )
  }

  return (
    <>
      <Homes />
      {/* <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' /> */}
    </>
  )
}

export default LandingPage

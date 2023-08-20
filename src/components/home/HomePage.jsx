import React, { useState, useEffect } from "react"
import axios from "axios"
import Content from "../landingPageComponents/Content"
import Trending from "../trending/Trending"
import Upcomming from "../upcoming/Upcomming"

const HomePage = () => {
  const [items, setItems] = useState([])
  const [item, setItem] = useState([])
  const [rec, setRec] = useState([])

  useEffect(
    ()=> getData(),[]
  )

  function getData() {
    axios.get("http://localhost:8000/movie-service/movies/category/upcoming")
      .then(
        response => {
          console.log(response);
          setItem(response.data)
        }
      )
    axios.get("http://localhost:8000/movie-service/movies/category/upcoming")
      .then(
        response => {
          console.log(response);
          setItems(response.data)
        }
      )
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
      <Content items={rec} />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
      <Trending />
      <Upcomming items={rec} title='Recommended Movies' />
    </>
  )
}

export default HomePage
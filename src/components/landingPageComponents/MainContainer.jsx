import React, { useEffect, useState } from "react"
import "./home.css"
import Content from "./Content"
import axios from "axios"

const MainContainer = () => {
  const [items, setItems] = useState([])

  useEffect(
    ()=> getData(),[items.length]
  )

  function getData() {
    axios.get("http://localhost:8000/movie-service/movies/category/home")
      .then(
        response => {
          console.log(response);
          setItems(response.data)
        }
      )
  }

  return (
    <>
      <section className='home'>
        <Content items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default MainContainer


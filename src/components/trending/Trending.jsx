import React, { useState } from "react"
import { trending } from "../../dummyData"
import "./style.css"
import Content from "../landingPageComponents/Content"

const Trending = () => {
  const [items, setItems] = useState(trending)
  return (
    <>
      <section className='trending'>
        <Content items={items} />
      </section>
    </>
  )
}

export default Trending

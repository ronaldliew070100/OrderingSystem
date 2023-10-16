import React, { useEffect } from "react"
import Hero from "./Components/Hero/Hero"
import Sidebar from "./Components/Sidebar/Sidebar"
import Content from "./Components/Content/Content"
import "./Recipes.css"
import axios from "axios"

function Recipes() {
  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then(function (response) {
      console.log(response)
    })
  }, [])
  return (
    <div className="grid-container innerWidth">
      <div className="hero paddings">
        <Hero />
      </div>
      <div className="sidebar paddings">
        <Sidebar />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  )
}

export default Recipes

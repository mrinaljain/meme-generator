import React from "react"
import "./header.css";
import troll from "../images/troll_face.png"

export default function Header() {
   return (
      <header className="header">
         <img
            alt ="meme logo"
            src={troll}
            className="header--image"
         />
         <h2 className="header--title">Meme Generator</h2>
         <h4 className="header--project">React Course - Project 3</h4>
      </header>
   )
}
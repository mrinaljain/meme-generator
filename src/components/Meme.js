import React from "react";
import './meme.css';
import memesData from "./memesData"


export default function Meme() {
   const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
   });
   const [allMemeImages, setAllMemeImages] = React.useState(memesData);

   function getMemeImage() {
      setMeme(function (oldMeme) {
         let totalMemes = allMemeImages.data.memes.length;
         let luckyNumber = Math.floor(Math.random() * totalMemes);
         let memeImageUrl = allMemeImages.data.memes[luckyNumber].url;
         return {
            ...oldMeme,
            randomImage: memeImageUrl
         };
      });
   }
   return (
      <main>
         <div className="form">
            <input
               type="text"
               placeholder="Top text"
               className="form--input"
            />
            <input
               type="text"
               placeholder="Bottom text"
               className="form--input"
            />
            <button
               className="form--button"
               onClick={getMemeImage}
            >
               Get a new meme image 🖼
            </button>
            <img className="memeImage" src={meme.randomImage} />
         </div>
      </main>
   )
}
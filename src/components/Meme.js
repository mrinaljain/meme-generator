import React from "react";
import './meme.css';
import memesData from "./memesData"


export default function Meme(){
   const [memeImage , setMemeImage] = React.useState("");
   function getImage() {
      let totalMemes = memesData.data.memes.length;
      let luckyNumber =  Math.floor( Math.random() * totalMemes );
      // console.log(memesData.data.memes[luckyNumber].url);
      let memeImageUrl = memesData.data.memes[luckyNumber].url;
      setMemeImage(memeImageUrl);
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
               onClick={getImage}
            >
               Get a new meme image 🖼
            </button>
             <img className="memeImage" src={memeImage} />
         </div>
      </main>
   )
}
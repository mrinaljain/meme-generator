import React from "react";
import './meme.css';
// import memesData from "./memesData"


export default function Meme() {
   const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
   });
   const [allMemeData, setAllMemeData] = React.useState([]);
   //API call for bringing data
   React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(data => setAllMemeData(data.data.memes))
   }, [])
   function getMemeImage() {
      setMeme(function (oldMeme) {
         let totalMemes = allMemeData.length;
         let luckyNumber = Math.floor(Math.random() * totalMemes);
         let memeImageUrl = allMemeData[luckyNumber].url;
         return {
            ...oldMeme,
            randomImage: memeImageUrl
         };
      });
   }
   function handelChange(event) {
      const { name, value } = event.target;
      setMeme(function (oldFormData) {
         return {
            ...oldFormData,
            [name]: value
         }
      });
   }
   return (
      <main>
         <div className="form">
            <input
               type="text"
               placeholder="Top text"
               className="form--input"
               name="topText"
               value={meme.topText}
               onChange={handelChange}
            />
            <input
               type="text"
               placeholder="Bottom text"
               className="form--input"
               name="bottomText"
               value={meme.bottomText}
               onChange={handelChange}
            />
            <button
               className="form--button"
               onClick={getMemeImage}
            >
               Get a new meme image 🖼
            </button>
         </div>
         <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
         </div>
      </main>
   )
}
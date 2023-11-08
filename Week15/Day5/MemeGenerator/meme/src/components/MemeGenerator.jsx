import React, { useState, useEffect } from "react";
import axios from "axios";

const MemeGenerator = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageUrl, setImageUrl] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImgs] = useState([]);



  const fetchApi = async () => {
    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      setAllMemeImgs(response.data.data.memes);
      const randomIndex = Math.floor(Math.random() * allMemeImgs.length);
      setImageUrl(allMemeImgs[randomIndex].url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
    setTopText("");
    setBottomText("");
  };

  return (
    <div>
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Enter Top Text"
        />
        <input
          type="text"
          name="bottomText"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Enter Bottom Text"
        />
        <button type="submit">Generate Meme</button>
      </form>
      <div className="meme">
        <img src={imageUrl} alt="Meme" />
        <h2 className="top">{topText}</h2>
        <h2 className="bottom">{bottomText}</h2>
      </div>
    </div>
  );
};

export default MemeGenerator;

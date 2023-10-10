import "./App.css";
import React, { useState } from "react";
import Quotes from "./Components/Quotes";
import "./style.css";

function App() {
  const [quote, setQuote] = useState({
    quote:'', 
    author:''
  })
  const [color, setColor] = useState('')

  const getRandomQuote = () => {
    const random = Math.floor(Math.random() * Quotes.length)
    const randomQuote = {
      quote: Quotes[random].quote,
      author: Quotes[random].author
    }
    setQuote(randomQuote)
    Quotes.splice(random, 1)

  }

  const getRandomColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    setColor(randomColor)
    document.body.style.backgroundColor = randomColor;
  }

  const clickBtn = () => {
    getRandomQuote()
    getRandomColor()
  }
  

  return (
    <div className="box">
      <h1 style={{color: color}}>{quote.quote}</h1>
      <h5  style={{color: color}}>- {quote.author} -</h5>
      <button onClick={clickBtn} style={{backgroundColor: color}}>New quote</button>
    </div>
  );
}

export default App;

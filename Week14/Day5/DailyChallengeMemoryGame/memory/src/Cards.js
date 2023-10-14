import React, { useState } from "react";
import Heroes from "./superheroes.json";

const Cards = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [cards, setCards] = useState(Heroes.superheroes);
  const [idClicked, setIdClicked] = useState([]);

  const shuffleCards = () => {
    const array = [...cards];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    setCards(array);
};


  const handleClick = (id) => {
    if (idClicked.includes(id)) {
      if (score > topScore) {
        setTopScore(score);
      }

      setScore(0);
      setIdClicked([]);
    } else {
      setIdClicked([...idClicked, id]);
      setScore(score => score +1)
    }

    shuffleCards();
  };

  return (
    <div>
      <div className="header">
        <h1>Superheroes Memory Game</h1>
        <p>
          Score: {score} Top Score: {topScore}
        </p>
      </div>
      <div className="header">
        <h1>
          Get points by clicking on an image but don't click on any more than
          once!
        </h1>
      </div>
      <div>
        <ul>
          {cards.map((hero) => {
            return (
              <li key={hero.id} onClick={() => handleClick(hero.id)}>
                <img src={hero.image} alt={hero.name} />
                <p>Name: {hero.name}</p>
                <p>Occupation: {hero.occupation}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cards;

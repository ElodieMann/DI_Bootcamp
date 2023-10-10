import React, { useState, useEffect } from "react";

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
    changeColor("yellow");
  }, []);

  const changeColor = (color) => {
    setFavoriteColor(color);
  };

  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={() => changeColor("blue")}>Change color</button>
    </div>
  );
};

export default Color;

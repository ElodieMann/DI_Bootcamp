//Board.jsx
import React from "react";

const Board = ({ handleClick, usedO, usedX }) => {
  return (
    <div className="game">
      {Array.from(Array(9).keys()).map((i) => (
        <div className="square" key={i} onClick={() => handleClick(i)}>
          {usedX.includes(i) ? "X" : usedO.includes(i) ? "O" : ""}
        </div>
      ))}
    </div>
  );
};

export default Board;
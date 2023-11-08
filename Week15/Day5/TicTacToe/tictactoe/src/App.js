//App.js
import "./App.css";
import React, { useState } from "react";
import Board from "./components/Board";
import TwoPlayers from "./components/TwoPlayers";
import Computer from "./components/Computer";

function App() {
  let patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [turn, setTurn] = useState("X");
  const [usedX, setUsedX] = useState([]);
  const [usedO, setUsedO] = useState([]);
  const [winner, setWinner] = useState(false);
  const [game, setGame] = useState(null);
  const [gameOver, setGameOver] = useState(false)

  const handleClick = (i) => {
    if (usedX.includes(i) || usedO.includes(i) || winner) {
      setWinner(false)
      setGameOver(true)
      
      return;
    }

    if (turn === "X") {
      setTurn("O");
      setUsedX([...usedX, i]);
    } else {
      setTurn("X");
      setUsedO([...usedO, i]);
    }
    endOfGame();
  };

  const endOfGame = () => {
    for (let i = 0; i < patterns.length; i++) {
      const pattern = patterns[i];
      if (
        usedO.includes(pattern[0]) &&
        usedO.includes(pattern[1]) &&
        usedO.includes(pattern[2])
      ) {
        setWinner(true);
         return;
      }
  
      if (
        usedX.includes(pattern[0]) &&
        usedX.includes(pattern[1]) &&
        usedX.includes(pattern[2])
      ) {
        setWinner(true);
         return;
      }
    }
  
    if (usedX.length + usedO.length === 9) {
      reset();
    }
  };

  const reset = () => {
    setUsedX([]);
    setUsedO([]);
    setTurn("X");
    setWinner(false);
  };

  return (
    <div className="App">
      <h1>REACT TIC TAC TOE</h1>
      <div className="btn">
        <button onClick={() => setGame("computer")}>Versus All</button>
        {game === "computer" && (
          <Computer
            endOfGame={endOfGame}
            patterns={patterns}
            usedO={usedO}
            usedX={usedX}
            turn={turn}
            setUsedO={setUsedO}
            setUsedX={setUsedX}
            setTurn={setTurn}
            setWinner={setWinner}
          />
        )}
        <button onClick={() => setGame("twoPlayers")}>2 players</button>
        {game === "twoPlayers" && <TwoPlayers />}
        <button onClick={reset}>Reset board</button>
      </div>
      <p>{turn}'s turn</p>
      <Board handleClick={handleClick} usedO={usedO} usedX={usedX} />
      {winner && <p style={{ backgroundColor: "green" }}>{turn} wins !</p>}
      {gameOver && <p>Game is already over! Reset if you want to play again.</p>}
    </div>
  );
}

export default App;

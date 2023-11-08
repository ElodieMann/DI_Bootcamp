// Computer.jsx
import React from 'react';

const Computer = ({ endOfGame, patterns, usedO, usedX, turn, setUsedO, setUsedX, setTurn, setWinner }) => {
    const computerMove = () => {
        const remaining = [];
        for (let i = 0; i < 9; i++) {
            if (!usedX.includes(i) && !usedO.includes(i)) {
                remaining.push(i);
            }
        }
        if (remaining.length === 0) {
            return; 
        }
        const randomIndex = Math.floor(Math.random() * remaining.length);
        const selectedSquare = remaining[randomIndex];
        setUsedO([...usedO, selectedSquare]);
        setTurn('X');
    
        endOfGame();
    };
  
    if (turn === 'O') {
      computerMove();
    }
  
    return null;
  };

export default Computer;

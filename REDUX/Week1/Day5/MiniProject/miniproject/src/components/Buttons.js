import React from "react";
import { Link } from 'react-router-dom';

const Buttons = () => {
  const btns = ["mountain", "beaches", "birds", "food"];
  return (
    <div className="btnContainer">
      {btns.map((btn) => (
        <Link key={btn} to={`/${btn}`}>
          <button>{btn}</button>
        </Link>
      ))}
    </div>
  );
};

export default Buttons;

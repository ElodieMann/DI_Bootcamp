import React from "react";

const Buttons = ({ setName }) => {
  const btns = ["Mountain", "Beaches", "Birds", "Food"];
  return (
    <div className="btnContainer">
      {btns.map((btn) => (
        <button onClick={() => setName(btn)}>{btn}</button>
      ))}
    </div>
  );
};

export default Buttons;

import React, { useState } from "react";

const ClickMe = () => {
  const alertClick = () => {
    alert("I was clicked");
  };
  const handleKeyDown = (e) => {
    let value = e.target.value;
    if (e.key === "Enter") {
      alert(`The Enter key was pressed, your input is : ${value}`);
      e.target.value = ''
    }
  };

  const [isToggleOn, setIsToggleOn] = useState(true)

  const handleToggle = () => {
setIsToggleOn(on => !on)

  }
  return (
    <div>
      <button onClick={alertClick}>Click</button>
      <input type="text" onKeyDown={handleKeyDown} />
      <button onClick={handleToggle}>  {isToggleOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default ClickMe;

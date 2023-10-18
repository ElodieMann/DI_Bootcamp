import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [input, setInput] = useState("");

 
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <Link to={`/${input}`}>
        <button onClick={() => setInput('')}>Send</button>
      </Link>
    </div>
  );
};

export default Form;

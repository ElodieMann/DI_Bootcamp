import React, { useState } from "react";
import Gallery from "./Gallery";
import Buttons from "./Buttons";

const Form = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setName(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input type="submit" value="Send" />
      </form>
      <Buttons setName={setName} />
      {setSubmit && <Gallery name={name} />}
    </div>
  );
};

export default Form;

// Form.jsx

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        name: name,
        isCompleted: false,
      })
    );
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setName(e.target.value)}   value={name}/>
      <input type="submit" value="Add todo" />
    </form>
  );
};

export default Form;

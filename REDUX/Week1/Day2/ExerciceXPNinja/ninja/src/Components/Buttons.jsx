// Buttons.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../redux/todoSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Show:</p>
      <button onClick={() => dispatch(filterTodo("ALL"))}>All</button>
      <button onClick={() => dispatch(filterTodo("ACTIVE"))}>Active</button>
      <button onClick={() => dispatch(filterTodo("COMPLETED"))}>Completed</button>
    </div>
  );
};

export default Buttons;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../redux/todoSlice";
import { selectFilteredTodos } from "../redux/todoSlice";

const Todos = () => {
  const todos = useSelector(selectFilteredTodos); 
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          onClick={() => dispatch(toggleTodo(index))}
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
        >
          {todo.name}
        </li>
      ))}
    </ul>
  );
};

export default Todos;

import React from "react";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

const TodosList = ({ handleDelete }) => {
  const todos = useSelector((state) => state.todos.todos)
  return (
    <ul>
      {todos?.map((todo) => {
        return <TodoCard todo={todo} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};
export default TodosList;

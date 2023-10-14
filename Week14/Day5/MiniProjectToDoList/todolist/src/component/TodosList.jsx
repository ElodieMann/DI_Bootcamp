import React from "react";
import TodoCard from "./TodoCard";

const TodosList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos?.map((todo) => {
        return <TodoCard todo={todo} handleDelete={handleDelete} />;
      })}
    </ul>
  );
};
export default TodosList;

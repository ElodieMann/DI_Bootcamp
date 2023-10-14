import React from "react";
import { formatDate } from "../services/helpers";

const TodoCard = ({ todo, handleDelete }) => {
  return (
    <li key={todo?.id} className="card" onClick={() => handleDelete(todo?.id)}>
      <h1 className="title">{todo?.title}</h1>
      <h2 className="content">{todo?.content}</h2>
      <h3 className="createdDate">Created : {formatDate(todo?.created)}</h3>
    </li>
  );
};
export default TodoCard;

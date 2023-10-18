import React, { useEffect, useState } from "react";
import axios from "axios";
import TodosList from "../component/TodosList";
import TodoForm from "../component/TodoForm";
import { getTodos, addTodo, deleteTodo } from "../todos/todo";
import { useDispatch } from "react-redux";

const TodosPage = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/");
      if (response) {
        dispatch(getTodos(response.data));
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/", input);
      if (res.status < 399) {
        dispatch(addTodo(input));
        setInput({
          title: "",
          content: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/${id}`);
      if (res) {
        dispatch(deleteTodo(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TodoForm
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        input={input}
      />
      <TodosList  handleDelete={handleDelete} />
    </div>
  );
};

export default TodosPage;

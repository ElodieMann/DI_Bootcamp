import React, { useEffect, useState } from "react";
import axios from "axios";
import TodosList from "../component/TodosList";
import TodoForm from "../component/TodoForm";

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
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
      setTodos(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/", input);
      setInput({
        title: "",
        content: "",
      });
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      fetchTodos();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TodoForm handleSubmit={handleSubmit} handleInput={handleInput} input={input} />
      <TodosList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default TodosPage;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
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
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} className="card"onClick={() => handleDelete(todo.id)}>
              <h1 className="title">{todo.title}</h1>
              <h2 className="content">{todo.content}</h2>
              <h3 className="createdDate">Created : {formatDate(todo.created)}</h3>
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <label />
        Add a new todo:
        <input
          placeholder="Title"
          onChange={handleInput}
          name="title"
          value={input?.title}
        />
        <label />
        <textarea
          placeholder="Comment"
          onChange={handleInput}
          name="content"
          value={input?.content}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Todo;

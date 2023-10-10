import React, { useState } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    setMessage("data sent!");
  };

  return (
    <div>
      <h1>New Book</h1>
      <h3>{message}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Author
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Genre
          <input
            type="text"
            name="genre"
            value={form.genre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year Published
          <input
            type="text"
            name="year"
            value={form.year}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Forms;

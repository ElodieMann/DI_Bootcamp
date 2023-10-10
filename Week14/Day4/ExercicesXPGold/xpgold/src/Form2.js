import React, { useState } from "react";
import axios from "axios";

const Form2 = () => {
  let [data, setData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  function handleData(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", { data })
      .then((res) => console.log(res.data.data)).catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>Data
      <input
        type="text"
        placeholder="userId"
        name="userId"
        value={data.userId}
        onChange={handleData}
      />
      <input
        type="text"
        placeholder="title"
        name="title"
        value={data.title}
        onChange={handleData}
      />
      <input
        type="text"
        placeholder="body"
        name="body"
        value={data.body}
        onChange={handleData}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form2;

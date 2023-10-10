import React, { useState } from "react";

const Form = () => {
  const [data, SetData] = useState({
    user: "",
    email: "",
  });
  function handleData(e) {
    const { name, value } = e.target
    SetData({
      ...data,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
  e.preventDefault()
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(Error);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="user" 
      name="user" onChange={handleData} />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={handleData}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;

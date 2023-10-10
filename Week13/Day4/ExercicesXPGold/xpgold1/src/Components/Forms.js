import React, { useState } from "react";

const Forms = () => {
  const [username, setUserName] = useState("");
  const [header, setHeader] = useState("");
  const [age, setAge] = useState(null);
  const [errormessage, setErrormessage] = useState("");
  const [message, setMessage] = useState(
    "THe content of a textarea goes in the calue attribute"
  );
  const [car, setCar] = useState("");

  const setValue = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "age") {
      setAge(value);
    }

    if (value !== "") {
      setHeader(`Hello ${username} ${age}`);
    } else {
      setHeader("");
    }
  };

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (isNaN(age)) {
      setErrormessage("Your age must be a number");
      // alert('Your age must be a number')
      return;
    }
    alert(`You are submitting ${username}`);
  };

  const setSelectValue = (e) => {
    setCar(e.target.value);
  };

  return (
    <div>
      <h1>{header}</h1>
      <form onSubmit={mySubmitHandler}>
        <label for="username">Enter your name:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={setValue}
        ></input>
        <label for="age">Enter your age:</label>
        <input type="text" id="age" name="age" onChange={setValue}></input>
        <textarea value={message} />
        <select value={car} onChange={setSelectValue}>
          <option value="ford">Ford</option>
          <option value="volvo">Volvo</option>
          <option value="fiat">Fiat</option>
        </select>
        <input type="submit" value="Submit" />
        <h3>{errormessage}</h3>
      </form>
    </div>
  );
};

export default Forms;

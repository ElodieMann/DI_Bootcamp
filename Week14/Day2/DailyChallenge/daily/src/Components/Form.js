import React, { useState } from "react";
import "./Forms.css";

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    destination: "",
    dietary: {
      nuts: false,
      lactose: false,
      vegan: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setData((prevData) => ({
        ...prevData,
        dietary: {
          ...prevData.dietary,
          [name]: checked,
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="formContainer">
      <h1>Sample Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          name="firstname"
          value={data.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={data.lastname}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
        <label>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={data.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={data.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
        Select your destination
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="thailand">Thailand</option>
          <option value="japan">Japan</option>
          <option value="brazil">Brazil</option>
        </select>
        Dietary restrictions:
        <label>
          <input
            type="checkbox"
            name="nuts"
            checked={data.dietary.nuts}
            onChange={handleChange}
          />
          Nuts Free
        </label>
        <label>
          <input
            type="checkbox"
            name="lactose"
            checked={data.dietary.lactose}
            onChange={handleChange}
          />
          Lactose Free
        </label>
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.dietary.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
      <h1>Entered information:</h1>
      <h2>Your name: {formSubmitted ? `${data.firstname} ${data.lastname}` : ""} </h2>
      <h2>Your age: {formSubmitted ? data.age : ""}</h2>
      <h2>Your gender: {formSubmitted ? data.gender : ""}</h2>
      <h2>Your destination: {formSubmitted ? data.destination: ""}</h2>
      <h2>Your dietary restrictions: </h2>
      <h4>**Nuts free: {formSubmitted ? data.dietary.nuts ? "Yes" : "No" : ""} </h4>
      <h4>**Lactose free: {formSubmitted ? data.dietary.lactose ? "Yes" : "No" : ""} </h4>
      <h4>**Vegan meal: {formSubmitted ? data.dietary.vegan ? "Yes" : "No" : " "} </h4>
    </div>
   
    </div>
  );
};

export default Form;

import React, { useState } from "react";

const Forms2 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      alert("Something wrong");
      return;
    }

    setSubmittedData(form);
  };

  const handleReset = () => {
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    });
    setSubmittedData(null);
  };

  return (
    <div>
      {submittedData === null ? (
        <div>
          <h1>Welcome</h1>
          <h3>Please provide your information below.</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder="Firstname"
            />
            <br />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              placeholder="Lastname"
            />
            <br />
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email address"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      ) : (
        <div>
     
          <p>
            {submittedData.lastName} | {submittedData.firstName}
          </p>
          <p>
            {submittedData.phone} | {submittedData.email}
          </p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Forms2;

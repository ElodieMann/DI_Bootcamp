import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/register", {
        name: name,
        email: email,
        password: password,
      });
  
      console.log(res);
      if (res.data && res.data.error) {
        setError(res.data.error);
      } else if (res.data && res.data.message) {
        setError(res.data.message); 
      } else {
      
        window.location.replace("/dashboard");
      }
    } catch (e) {
      console.log(e);
      setError("already registered");
    }
  };
  

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name <input type="name" onChange={((e) => setName(e.target.value))} />
        </label>
        <label>
          Email <input type="email" onChange={((e) => setEmail(e.target.value))} />
        </label>
        <label>
          Password{" "}
          <input type="password" onChange={((e) => setPassword(e.target.value))} />
        </label>

        <input type="submit" value="Sign In" />

        {error && <p>{error}</p>}

      </form>
    </div>
  );
};

export default Register;

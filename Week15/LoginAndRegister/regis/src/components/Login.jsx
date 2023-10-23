import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });
      console.log(res);
      if (res.data && res.data.error) {
        setError(res.data.error);
      } else {
        window.location.replace("/dashboard");
      }
    } catch (e) {
      console.log(e);
      setError("not registered");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email{" "}
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password{" "}
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Sign In" />

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;

import "./App.css";
import Fetch from "./Fetch";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState("");

  const handleInput = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3000/api/world", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      console.log(data);
      if (!response.ok) {
        throw new Error(Error);
      } else {
        const responseData = await response.text();
        setResponse(responseData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <Fetch />
      <h2>Post to Server:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} name="inputValue" />
        <input type="submit" value="Submit" />
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}

export default App;

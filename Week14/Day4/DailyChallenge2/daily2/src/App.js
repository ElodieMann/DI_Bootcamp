import "./App.css";
import React, { useState } from "react";
import Countries from "./Countries";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleInput = (e) => {
    const value = e.target.value;
    setValue(value);

    if (value.length === 0) {
      setData([]);
    } else {
      const response = Countries.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      );
      setData(response);
    }
  };

  const clickCountry = (value) => {
    setValue(value.target.innerText);
    setData([])
  };

  return (
    <div className="App">
      <h1>Auto Completed</h1>
      <input type="text" onChange={handleInput} value={value} />
      <ul>
        {data.map((val) => {
          return (
            <li key={val} onClick={(val) => clickCountry(val)}>
              {val}
            </li>
          );
        })}
      </ul>
      <p>Suggestions: {data.length}</p>
    </div>
  );
}

export default App;

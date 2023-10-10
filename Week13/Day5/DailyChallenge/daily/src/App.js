import "./App.css";
import "./style.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("addition");
  const [result, setResult] = useState("");

  const number1Value = (e) => {
    const value = e.target.value;
    setNum1(value);
  };
  const number2Value = (e) => {
    const value = e.target.value;
    setNum2(value);
  };
  const operatorValue = (e) => {
    const value = e.target.value;
    setOperator(value);
  };

  const resultOperation = (e) => {
    e.preventDefault();
    const number1 = Number(num1);
    const number2 = Number(num2);

    switch (operator) {
      case "addition":
        setResult(number1 + number2);
        break;
      case "subtraction":
        setResult(number1 - number2);
        break;
      case "multiplication":
        setResult(number1 * number2);
        break;
      case "division":
        setResult(number1 / number2);
        break;
    }
  };

  return (
    <div className="app">
      <h1>Adding Two Numbers</h1>
      <form onSubmit={resultOperation}>
        <div className="numbers">
          <input type="number" onChange={number1Value} />
          <select value={operator} onChange={operatorValue}>
            <option value="addition">+</option>
            <option value="subtraction">-</option>
            <option value="multiplication">x</option>
            <option value="division">/</option>
          </select>
          <input type="number" onChange={number2Value} />
        </div>
        <input type="submit" value="Add Them!" />
      </form>
      <p className="result">{result}</p>
    </div>
  );
}

export default App;

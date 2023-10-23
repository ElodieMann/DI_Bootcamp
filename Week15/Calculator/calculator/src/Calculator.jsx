import React, { useState } from "react";

const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumber = (num) => {
    if (operator === "") {
      setNumber1((prev) => prev + num);
    } else {
      setNumber2((prev) => prev + num);
    }
  };

  const resetCalculator = () => {
    setNumber1("");
    setNumber2("");
    setOperator("");
    setResult("");
  };

  const calculate = () => {
    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = Number(number1) + Number(number2);
        break;
      case "-":
        calculatedResult = Number(number1) - Number(number2);
        break;
      case "*":
        calculatedResult = Number(number1) * Number(number2);
        break;
      case "/":
        calculatedResult = Number(number1) / Number(number2);
        break;
      default:
        break;
    }
    setResult(calculatedResult);
    setNumber1(calculatedResult);
    setNumber2("");
    setOperator("");
  };

  return (
    <div>
      <div className="result">
        <p>
          {number1} {operator} {number2} = {result}
        </p>
        <h1>{result}</h1>
      </div>
      <div className="calculs">
        <button className="ac" onClick={resetCalculator}>
          AC
        </button>
        <button className="operators" onClick={() => setOperator("/")}>
          ÷
        </button>
        <button className="operators" onClick={() => setOperator("x")}>
          x
        </button>
        <button className="numbers" onClick={() => handleNumber("7")}>
          7
        </button>
        <button className="numbers" onClick={() => handleNumber("8")}>
          8
        </button>
        <button className="numbers" onClick={() => handleNumber("9")}>
          9
        </button>
        <button className="operators" onClick={() => setOperator("-")}>
          -
        </button>
        <button className="numbers" onClick={() => handleNumber("4")}>
          4
        </button>
        <button className="numbers" onClick={() => handleNumber("5")}>
          5
        </button>
        <button className="numbers" onClick={() => handleNumber("6")}>
          6
        </button>
        <button className="operators" onClick={() => setOperator("+")}>
          +
        </button>
        <button className="numbers" onClick={() => handleNumber("1")}>
          1
        </button>
        <button className="numbers" onClick={() => handleNumber("2")}>
          2
        </button>
        <button className="numbers" onClick={() => handleNumber("3")}>
          3
        </button>
        <button className="operators equal" onClick={calculate}>
          =
        </button>
        <button className="numbers zero" onClick={() => handleNumber("0")}>
          0
        </button>
        <button className="numbers" onClick={() => handleNumber(".")}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const vote = (index) => {
    const copyLanguages = [...languages];

    copyLanguages[index].votes++;

    setLanguages(copyLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      <table>
        {languages.map((language, index) => (
          <tr>
            <td>{language.votes}</td>
            <td>{language.name}</td>
            <td>
              <button onClick={() => vote(index)}>Click here</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

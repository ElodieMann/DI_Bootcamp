import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <h1>Snap Shot</h1>
      <Form />
    </div>
  );
}

export default App;

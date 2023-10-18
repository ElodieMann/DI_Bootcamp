// App.js
import "./App.css";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import Buttons from "./Components/Buttons";

function App() {
  return (
    <div className="App">
      <Form />
      <Todos />
      <Buttons />
    </div>
  );
}

export default App;

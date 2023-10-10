import "./App.css";
import Car from "./Components/Car";
import ClickMe from "./Components/Events";
import Phone from "./Components/Phone";
import Color from "./Components/Color";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div>
      <Car model={carinfo.model} />
      <ClickMe />
      <Phone />
      <Color />
    </div>
  );
}

export default App;

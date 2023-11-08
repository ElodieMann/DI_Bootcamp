import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <div className="main">
        <h1>Weather Finder</h1>
        <h4>Find out temperature, conditions and more...</h4>
        <Weather />
      </div>
    </div>
  );
}

export default App;

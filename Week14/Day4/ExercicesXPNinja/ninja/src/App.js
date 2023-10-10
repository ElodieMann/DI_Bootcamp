import logo from './logo.svg';
import './App.css';
import Customers from './Components/Customers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Customers</h1>
        <Customers />
      </header>
    </div>
  );
}

export default App;

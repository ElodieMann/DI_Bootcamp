import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Company from './components/Company';
import Values from './components/Values';
import Mission from './components/Mission';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Company />
      <Values />
      <Mission />
      <Form />

    </div>
  );
}

export default App;

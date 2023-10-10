import logo from './logo.svg';
import './App.css';
import Exercice from './Exercise3'


const myelement = <h1>I Love JSX!</h1>
const sum = 5 + 5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    // <div className="App">
    //   <p>Hello World!</p>
    //   <p>{myelement}</p>
    //   <p>React is {sum} times better with JSX</p>
    //   <h3>{user.firstName}</h3>
    //   <h3>{user.lastName}</h3>
    // </div>
    <div>
    <Exercice />
    </div>
  );
}

export default App;

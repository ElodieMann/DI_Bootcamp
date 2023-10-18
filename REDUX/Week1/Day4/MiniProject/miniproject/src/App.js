import "./App.css";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
function App() {
  return (
    <div className="App">
      <h1>Shopping Cart Example</h1>
      <hr />
      <Products />
      <hr />
      <Cart />
    </div>
  );
}

export default App;

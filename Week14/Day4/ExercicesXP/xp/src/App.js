import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";


const HomeScreen = () => <header>home</header>;
const ProfileScreen = () => <header>profile</header>;
const ShopScreen = () => {
  throw new Error("An error has occurred.");
};


const FetchData = async () => {
  try {
    const response = await fetch('https://webhook.site/fd81e53f-df09-473f-92be-eb8ae3312384', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};


function App() {
  return (
    //Exercice1
    // <BrowserRouter>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/" exact>
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/profile">
    //           Profile Screen
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/shop">
    //           Shop
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
    //     <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
    //     <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
    //   </Routes>
    // </BrowserRouter>

    // EXERCICE 2
    //   <PostList />

        // EXERCICE 3

    // <div>
    //   <Example1 />
    //   <Example2 />
    //   <Example3 />
    // </div>

    // Exercice4
    <button onClick={FetchData}>Fetch Data</button>

  );
}

export default App;

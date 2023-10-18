import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact="true" path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:post_id" component={Post} />
        </Switch>
      </div>
    </Router>
    
    );
  }
}

export default App;

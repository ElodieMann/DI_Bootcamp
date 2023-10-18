import React from 'react';
import Card from './Card';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Scrolling components</h1>
      <div className="cards-container">
        <Card icon="⭐" label="Stars" number={5} />
        <Card icon="🔥" label="Fire" number={3} />
        <Card icon="💡" label="Ideas" number={10} />
        <Card icon="🌈" label="Rainbows" number={7} />
        <Card icon="🚀" label="Rocket" number={9} />
        <Card icon="⚡" label="Energy" number={6} />
      </div>
    </div>
  );
};

export default App;

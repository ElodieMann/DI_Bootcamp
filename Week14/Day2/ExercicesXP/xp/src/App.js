import React from 'react';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';
import Color from './Components/Color';


function App() {
  return (
    <div>
      {/* Simulation 1: */}
      {/* <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* Simulation 2: */}
      {/* <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* Simulation 3: */}

      <BuggyCounter />

      <Color />
    </div>
  );
}

export default App;

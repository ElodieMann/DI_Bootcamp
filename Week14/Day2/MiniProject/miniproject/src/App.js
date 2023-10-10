import React from "react";
import ColumnRight from "./Components/ColumnRight";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My React App</h1>
      </header>
      <div className="main">
     
        <ErrorBoundary>
          <ColumnRight />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
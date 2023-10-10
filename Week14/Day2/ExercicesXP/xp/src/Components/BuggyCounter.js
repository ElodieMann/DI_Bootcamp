import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));

    if (this.state.counter === 4) {
      throw new Error("I crashed");
    }
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
}

export default BuggyCounter;

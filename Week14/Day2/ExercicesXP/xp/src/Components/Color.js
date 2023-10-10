import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("Child Composant unmounted !");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      shouldUpdate: true,
      count: 0,
      show: true,
    };
  }

  shouldComponentUpdate() {
    return this.state.shouldUpdate;
  }

  componentDidMount() {
    alert("componentDidMount reached");
    setTimeout(() => {
      this.changeColor("yellow");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    if (this.state.count === 1) {
      console.log("after update");
    }
  }

  changeColor = (color) => {
    this.setState((prevState) => ({
      favoriteColor: color,
      count: prevState.count + 1,
    }));
  };

  handleRemoveClick = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>

        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={() => this.changeColor("blue")}>Change color</button>
        <button onClick={() => this.setState({ shouldUpdate: false })}>
          Disable Update
        </button>
        {this.state.show && <Child />}
        <button onClick={this.handleRemoveClick}>Delete</button> 
      </div>
    );
  }
}

export default Color;

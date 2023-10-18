import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>
        <button onClick={() => this.props.onAgeUp(1)}>Age UP</button>
        <button onClick={() => this.props.onAgeDown(1)}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: (val) => dispatch(actionCreator.ageUp(val)),
    onAgeDown: (val) => dispatch(actionCreator.ageDown(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

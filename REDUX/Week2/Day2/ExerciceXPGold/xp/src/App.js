import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import * as actionCreator from "./actions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
        </div>
        {this.props.loading ? (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <button onClick={() => this.props.onAgeUp(1)}>Age UP</button>
            <button onClick={() => this.props.onAgeDown(1)}>Age Down</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: (val) => dispatch(actionCreator.ageUp(val)),
    onAgeDown: (val) => dispatch(actionCreator.ageDown(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

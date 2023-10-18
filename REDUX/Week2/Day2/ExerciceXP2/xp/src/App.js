import React from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className="App">
      <div>Age: {props.age}</div>
      <button onClick={props.onAgeUp}>Age Up</button>
      <button onClick={props.onAgeDown}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', age: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', age: 1 }), 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

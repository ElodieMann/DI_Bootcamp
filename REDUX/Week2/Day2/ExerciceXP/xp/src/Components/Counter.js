import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
  const { count, dispatch } = props;

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const incrementIfOdd = () => {
    
      dispatch({ type: 'INCREMENT' });
    
  };

  const incrementAsync = () => {
    setTimeout(() => {
      dispatch({ type: 'INCREMENT' });
    }, 1000);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>Increment if Odd</button>
      <button onClick={incrementAsync}>Increment Async</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Counter);

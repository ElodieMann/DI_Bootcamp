import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import App from './App';

const logAction = (store) => (next) => (action) => {
  if (action.type === 'AGE_UP') {
    console.log(`caught in the middleware { "age": ${store.getState().age + 1} }`);
  } else if (action.type === 'AGE_DOWN') {
    console.log(`caught in the middleware { "age": ${store.getState().age - 1} }`);
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

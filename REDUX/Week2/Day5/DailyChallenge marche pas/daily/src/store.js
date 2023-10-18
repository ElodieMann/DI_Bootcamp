// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Assuming you want to use Redux Thunk for async actions
import movieReducer from './reducers'; // Replace with your actual reducer

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  movies: movieReducer // Replace 'movies' with your reducer key
  // Add more reducers here if needed
});

// Create the store with the rootReducer and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

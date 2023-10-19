//reducers.js
import { combineReducers } from 'redux';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIE':
      return {
        ...state,
        text: action.payload
      };
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  movie: movieReducer
});

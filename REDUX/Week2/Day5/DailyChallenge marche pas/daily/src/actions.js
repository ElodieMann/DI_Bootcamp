import axios from 'axios';

// Action types
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const LOADING = 'LOADING';

const APIKey = 'f9bb11a8'; // Replace with your actual API key

// Example action creators
export const searchMovie = (text) => (dispatch) => {
  axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(res =>
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data.Search
      }))
    .catch(err => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  dispatch({ type: LOADING });

  axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(res =>
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data
      }))
    .catch(err => console.log(err));
};

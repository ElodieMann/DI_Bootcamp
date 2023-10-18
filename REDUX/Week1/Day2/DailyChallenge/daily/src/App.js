import React from 'react';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

const App = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <MovieList />
      <hr />
      <h2>Movie</h2>
      <MovieDetails />
    </div>
  );
};

export default App;

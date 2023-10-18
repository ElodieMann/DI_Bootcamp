import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const MovieList = ({ movies, selectMovie }) => {
  const renderList = movies.map(movie => {
    return (
      <div key={movie.title}>
        <div>{movie.title}</div>
        <button onClick={() => selectMovie(movie)}>Select</button>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { selectMovie })(MovieList);

import React from 'react';
import { connect } from 'react-redux';

const MovieDetails = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <div>Select a movie</div>;
  }

  return (
    <div>
      <div>Title: {selectedMovie.title}</div>
      <div>Release Date: {selectedMovie.releaseDate}</div>
      <div>Rating: {selectedMovie.rating}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedMovie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetails);

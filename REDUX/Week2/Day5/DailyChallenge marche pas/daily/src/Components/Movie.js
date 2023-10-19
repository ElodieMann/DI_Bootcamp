import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions';

const Movie = ({ movie, fetchMovie, match }) => {
  return (
    <div>
      <Link to="/" className="btn btn-default text-light">
        Go Back To Search
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // map state to props if needed
});

export default connect(mapStateToProps, { fetchMovie })(Movie);

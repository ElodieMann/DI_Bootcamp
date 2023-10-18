import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      <Link to={`/movie/${movie.id}`} className="btn btn-primary">
        See More
      </Link>
    </div>
  );
};

export default MovieCard;

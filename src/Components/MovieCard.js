import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Note: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
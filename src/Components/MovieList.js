import React from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      description: "Un thriller hallucinant",
      trailerLink: "https://www.youtube.com/watch?v=HcoZbHBDHQA"
    },
    {
      id: 2,
      title: "The Matrix",
      description: "Un film d'action cyberpunk",
      trailerLink: "https://www.youtube.com/watch?v=8xx91zoASLY"
    },
    {
      id: 3,
      title: "Interstellar",
      description: "Un voyage à travers l'espace et le temps",
      trailerLink: "https://www.youtube.com/watch?v=HsPP6xSzQoE"
    },
    // Ajoutez d'autres films ici...
  ];

  return (
    <div>
      <h1>Liste des Films</h1>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>
            <button>Voir Description et Bande-annonce</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
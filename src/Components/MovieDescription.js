import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDescription() {
  const { id } = useParams(); // Récupérer l'ID du film depuis l'URL
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

  // Trouver le film correspondant à l'ID
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Film non trouvé</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        Voir la bande-annonce
      </a>
      <br />
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDescription;
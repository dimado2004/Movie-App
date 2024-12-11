import React, { useState } from 'react';
import MovieList from './/components/MovieList.js';
import Filter from './/components/Filter.js';

function App() {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller.', posterURL: 'https://example.com/inception.jpg', rating: 9 },
    { title: 'The Matrix', description: 'A cyberpunk action film.', posterURL: 'https://example.com/matrix.jpg', rating: 8.7 },
    { title: 'Interstellar', description: 'A journey through space and time.', posterURL: 'https://example.com/interstellar.jpg', rating: 8.6 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const addNewMovieForm = (
    <div>
      <h2>Ajouter un nouveau film</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newMovie = {
          title: prompt('Titre du film:'),
          description: prompt('Description:'),
          posterURL: prompt('URL du poster:'),
          rating: parseFloat(prompt('Note (0-10):'))
        };
        addMovie(newMovie);
      }}>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
  
  return (
    <div className="App">
      <h1>Movie App</h1>
      {addNewMovieForm}
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
  

  const filterMovies = (criteria) => {
    const { title, rating } = criteria;
    const newFilteredMovies = movies.filter((movie) => {
      return (
        (title === '' || movie.title.toLowerCase().includes(title.toLowerCase())) &&
        (rating === '' || movie.rating === parseFloat(rating))
      );
    });
    setFilteredMovies(newFilteredMovies);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
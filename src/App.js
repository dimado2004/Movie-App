import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './/MovieList.js';
import MovieDescription from './/MovieDescription.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
      </Routes>
    </Router>
  );
}

export default App;
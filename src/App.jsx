import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import "./styles/App.css"

const API_URL = 'https://www.omdbapi.com/?apikey=29302a1f';
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("avenger");
  }, []);

  return (
    <div className="app">
      <h1>Movie Search App</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

import React from 'react';
import MovieCard from "./MovieCard"

const MovieList = ({ movies }) => {
    return (
        <div className="movie_list">
            {movies?.length > 0 ? (
                movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
            ) : (
                <h2>No movies found</h2>
            )}
        </div>
    )
};

export default MovieList;
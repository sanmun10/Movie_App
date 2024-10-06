import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie_card">
            <img src={movie.poster !== "N/A" ? movie.poster : 'https://via.placeholder.com/400'} alt={movie.title} />
            <div>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </div>

        </div>
    );
};

export default MovieCard;
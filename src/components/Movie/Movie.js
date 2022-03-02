import React from "react";
import './Movie.css'

export default function Movie({ navigate, movie }) {
  return (
    <li
      onClick={() => {
        navigate(`/moviePage/${movie.imdbID}`);
      }}
      id={movie.imdbID}
      
    >
      <img
        className={movie.Poster === "N/A" ? "notImage" : "allMoviesImage"}
        alt={movie.Title}
        src={movie.Poster === "N/A" ? "./assets/video.png" : movie.Poster}
      />
      <div className="dataMovie">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </li>
  );
}

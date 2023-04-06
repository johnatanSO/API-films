import React from 'react'
import style from './Movie.module.scss'

export function Movie({ movie }: any) {
  return (
    <li
      onClick={() => {
        /* navigate(`/moviePage/${movie.imdbID}`) */
      }}
      id={movie.imdbID}
      className={style.movieItem}
    >
      <img
        className={movie.Poster === 'N/A' ? style.notImage : style.movieImage}
        alt="Capa do filme"
        title={movie.Title}
        src={movie.Poster === 'N/A' ? './assets/video.png' : movie.Poster}
      />
      <div className={style.movieTitleContainer}>
        <h3>{movie.Title}</h3>
        <span>{movie.Year}</span>
      </div>
    </li>
  )
}

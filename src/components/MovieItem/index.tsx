import Image from 'next/image'
import React from 'react'
import style from './MovieItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export function MovieItem({ movie }: any) {
  return (
    <Link className={style.movieItem} href={`/movie/${movie.imdbID}`}>
      {movie.Poster !== 'N/A' ? (
        <Image
          className={style.movieImage}
          alt="Capa do filme"
          title={movie.Title}
          src={movie.Poster}
          width={320}
          height={420}
        />
      ) : (
        <div className={style.notFoundFilmContainer}>
          <FontAwesomeIcon className={style.notFoundIcon} icon={faFilm} />
          <span>Imagem não encontrada :(</span>
        </div>
      )}
      <footer className={style.movieTitleContainer}>
        <h3>{movie.Title}</h3>
        <span>{movie.Year}</span>
      </footer>
    </Link>
  )
}

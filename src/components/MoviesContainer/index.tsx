import React, { useContext } from 'react'
import style from './MoviesContainer.module.scss'
import { MovieItem } from '../MovieItem'
import { MoviesContext } from '@/src/contexts/MoviesContext'

export function MoviesContainer() {
  const { movies } = useContext(MoviesContext)
  return (
    <ul className={style.containerMovies}>
      {movies.map((movie: any) => {
        return <MovieItem key={movie?.imdbID} movie={movie} />
      })}
    </ul>
  )
}

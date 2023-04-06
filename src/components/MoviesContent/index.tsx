import React, { useContext } from 'react'
import style from './MoviesContainer.module.scss'
import { Movie } from '../Movie/'
import { MoviesContext } from '@/src/contexts/MoviesContext'

export function MoviesContainer() {
  const { movies } = useContext(MoviesContext)
  return (
    <div>
      <ul className={style.containerMovies}>
        {movies.map((movie: any) => {
          return <Movie key={movie?.imdbID} movie={movie} />
        })}
      </ul>
    </div>
  )
}

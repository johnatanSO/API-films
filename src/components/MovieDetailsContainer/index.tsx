import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './MovieDetailsContainer.module.scss'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface MovieDetailsContainerProps {
  movieData: any
}

export function MovieDetailsContainer({
  movieData,
}: MovieDetailsContainerProps) {
  return (
    <>
      <div className={style.container}>
        <Link className={style.backArrow} href="/">
          <FontAwesomeIcon className={style.icon} icon={faAngleLeft} />
          Voltar
        </Link>
        <div className={style.movieDetails}>
          <div className={style.duration}>
            <h3>
              {movieData?.Runtime} - {movieData?.Year}
            </h3>
          </div>

          <h1 className={style.movieTitle}>{movieData?.Title || '--'}</h1>

          <div className={style.rate}>
            <h5>IMDb</h5>
            <span>{movieData?.imdbRating || '--'}/10</span>
          </div>

          <div className={style.plot}>
            <h3>Plot</h3>
            {movieData?.Plot || '--'}
          </div>

          <div className={style.infosContainer}>
            <div className={style.cardInfo}>
              <h3>Cast</h3>
              {movieData?.Actors || '--'}
            </div>
            <div className={style.cardInfo}>
              <h3>Genre</h3>
              {movieData?.Genre || '--'}
            </div>
            <div className={style.cardInfo}>
              <h3>Director</h3>
              {movieData?.Director || '--'}
            </div>
          </div>
        </div>

        <img className={style.poster} src={movieData?.Poster} alt="" />
      </div>
    </>
  )
}

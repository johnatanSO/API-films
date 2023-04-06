import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './MoviePage.module.scss'
import Skeleton from 'react-loading-skeleton'

function ComponentSkeleton() {
  return (
    <div>
      <Skeleton width={500} height={500}></Skeleton>
      <h1>loading...</h1>
    </div>
  )
}

function MoviePage() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()

  const [movie, setMovie] = useState('')
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=604ab899&`)
      .then((res) => {
        return res.json()
      })
      .then((resposta) => {
        setMovie(resposta)
      })
    setLoading(false)
  }, [])

  return (
    <div className="content">
      {loading && <ComponentSkeleton></ComponentSkeleton>}
      {!loading && (
        <>
          <div>
            <img
              onClick={() => navigate('/')}
              alt="backArrow"
              className="backArrow"
              src="../assets/arrow.png"
            />
          </div>

          <div className="movieDataContainer">
            <div className="imagePoster">
              <img
                className="movieImage"
                alt={movie.Title}
                src={movie.Poster}
              />
            </div>

            <div className="title">
              <div className="time">
                <h3>{movie.Runtime}</h3>
                <span>-</span>
                <h3>{movie.Year}</h3>
              </div>

              <h1 className="movieTitle">{movie.Title}</h1>

              <div className="rate">
                <img
                  alt="IMdb rate"
                  className="logoIMDB"
                  src="../assets/logoIMDB.svg"
                />
                {movie.imdbRating}/10
              </div>
            </div>

            <div className="plot">
              <h3>Plot</h3>
              {movie.Plot}
            </div>

            <div className="infos">
              <div className="cast">
                <h3>Cast</h3>
                {movie.Actors}
              </div>
              <div className="genre">
                <h3>Genre</h3>
                {movie.Genre}
              </div>
              <div className="director">
                <h3>Director</h3>
                {movie.Director}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MoviePage

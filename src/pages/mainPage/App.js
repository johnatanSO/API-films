import React, { useEffect, useState } from 'react'
import './App.css'
import MovieNotFound from '../../components/contentError/MovieNotFound'
import InputSearch from '../../components/InputSearch/InputSearch'
import { useNavigate } from 'react-router-dom'
import ContentMovies from '../../components/contentMovies/ContentMovies'

function App() {
  const [movieName, setMovieName] = useState('')
  const [moviesList, setMoviesList] = useState([])
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const navigate = useNavigate()
  const [response, setResponse] = useState('')
  const [showMovies, setShowMovies] = useState(false)

  const totalPages = Math.ceil(totalResults / 10)

  useEffect(() => {
    if (moviesList.length > 0) {
      getMoviesApi(page)
    }
  }, [page])

  function searchMovies(event) {
    setPage(1)

    event.preventDefault()
    if (movieName === '') {
      return <h2>Procure um filme por favor!</h2>
    } else {
      getMoviesApi(1)
    }
  }

  function getMoviesApi(page) {
    fetch(
      `https://www.omdbapi.com/?s=${movieName}&apikey=604ab899&page=${page}`,
    )
      .then((res) => {
        return res.json()
      })
      .then((resposta) => {
        if (resposta.Response === 'False') {
          setError(resposta.Error)
          setShowMovies(false)
        } else {
          setMoviesList(resposta.Search)
          setTotalResults(resposta.totalResults)
          setShowMovies(true)
        }
        setResponse(resposta)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function nextPage() {
    if (page === totalPages) {
      setPage(totalPages)
    } else {
      setPage(page + 1)
    }
  }
  function previousPage() {
    if (page <= 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }

  function getMovieName(event) {
    const text = event.target.value
    setMovieName(text)
  }

  return (
    <div className="container">
      <h1 className="titleMain">JETFLIX</h1>
      <InputSearch getMovieName={getMovieName} searchMovies={searchMovies} />
      {response.Response === 'False' && (
        <>
          <h1>Error</h1>
          <MovieNotFound error={error}></MovieNotFound>
        </>
      )}

      <ContentMovies
        previousPage={previousPage}
        nextPage={nextPage}
        navigate={navigate}
        moviesList={moviesList}
        showMovies={showMovies}
      />
    </div>
  )
}

export default App

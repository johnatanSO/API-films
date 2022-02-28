import React, { useEffect, useState } from "react";
import "./App.css";
import MovieNotFound from "./MovieNotFound";
import InputSearch from "./InputSearch";
import { useNavigate } from "react-router-dom";
import ContentMovies from "./ContentMovies"

function App() {
  const [movieName, setMovieName] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const navigate = useNavigate();
  const [response, setResponse] = useState('')
  const [showMovies, setShowMovies] = useState(false)

  let totalPages = Math.ceil(totalResults / 10);

  useEffect(() => {
    if (moviesList.length > 0) {
      getMoviesApi();
    }
  }, [page]);

  async function searchMovies(event) {
    event.preventDefault();
    await setPage(1);

    getMoviesApi();
  }

  function getMoviesApi() {
    fetch(
      `https://www.omdbapi.com/?s=${movieName}&apikey=604ab899&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((resposta) => {
        if (movieName === "") {
          setMoviesList([]);
        } else if (resposta.Response === "False") {
          setError(resposta.Error);
        } else {
          setMoviesList(resposta.Search);
          setTotalResults(resposta.totalResults);
          setShowMovies(true)
        }
        setResponse(resposta)
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function nextPage() {
    if (page === totalPages) {
      setPage(totalPages);
    } else {
      setPage(page + 1);
    }
  }
  function previousPage() {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  function getMovieName(event) {
    let text = event.target.value;
    setMovieName(text);
  }

  return(
    <div className="container">
      <h1 className="titleMain">JETFLIX</h1>
      <InputSearch getMovieName={getMovieName} searchMovies={searchMovies} />
      {response.Response === "False" &&
        <>
          <h1>Error</h1>
          <MovieNotFound error={error}></MovieNotFound>
        </>
      }

      <ContentMovies navigate={navigate} moviesList={moviesList} showMovies={showMovies} />
      
    </div>
  )
}

export default App;

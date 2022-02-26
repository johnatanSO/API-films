import React, { useEffect, useState } from "react";
import "./App.css";
import MovieNotFound from "./MovieNotFound";
import InputSearch from "./InputSearch";
import {useNavigate} from "react-router-dom"


function App() {
  const [movieName, setMovieName] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  const navigate = useNavigate()
  
  let totalPages = Math.ceil(totalResults / 10)

  

    useEffect(()=>{
    if(moviesList.length !== 0){
      setTimeout(()=>{
        getMoviesApi()
      },200)
    } 
  },[page]) 
  
   function getMoviesApi(){

       fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=604ab899&page=${page}`)
        .then((res) => {
          return res.json();
        })
        .then((resposta) => {
      
          if(movieName===""){
            setMoviesList([])
          }else if (resposta.Response === "False") {
            setError(resposta.Error);
          } else {
            setMoviesList(resposta.Search);
            setTotalResults(resposta.totalResults)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  }





  function nextPage() {
    
    if(page=== totalPages){
      setPage(totalPages)
    }else{
      setPage(page+1);
    }
  }
  function previousPage() {
    if(page <= 1){
      setPage(1);
    }else{
      setPage(page-1)
    }
  }

 function searchMovies(event) {
    event.preventDefault();
    setPage(1)
    
    getMoviesApi()
  }

  function getMovieName(event) {
    let text = event.target.value;
    setMovieName(text);
    
  }

  if (moviesList.length === 0 && error === "") {
    return (
      <div className="container">
        <h1 className="titleMain">JETFLIX</h1>

        <InputSearch
          getMovieName={getMovieName}
          searchMovies={searchMovies}
        ></InputSearch>
      </div>
    );
  } else if (moviesList.length === 0) {
    return (
      <div className="container">
        <h1 className="titleMain">JETFLIX</h1>
        <InputSearch
          getMovieName={getMovieName}
          searchMovies={searchMovies}
        ></InputSearch>
        <MovieNotFound error={error}></MovieNotFound>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1 className="titleMain">JETFLIX</h1>
        <InputSearch
          getMovieName={getMovieName}
          searchMovies={searchMovies}
        ></InputSearch>

        <div>
          <ul className="containerMovies">
            {moviesList.map((movie) => {
              return (
                <li onClick={()=>{navigate(`/moviePage/${movie.imdbID}`)}} id={movie.imdbID} key={movie.imdbID}>

                  <img
                    className={
                      movie.Poster === "N/A" ? "notImage" : "allMoviesImage"
                    }
                    alt={movie.Title}
                    src={
                      movie.Poster === "N/A"
                        ? "./assets/video.png"
                        : movie.Poster
                    }
                  />
                  <div className="dataMovie">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="buttonsPages">
          <button style={{
              backgroundColor: "transparent",
              padding: "10px",
              border: "1px solid white",
              color: "white",
              width: "80px",
             
              cursor: "pointer",
            }}
            onClick={previousPage}>Previous</button>
            <div className="totalResults">
              <span>{page}/{totalPages}</span>
              <span>({totalResults} results)</span>
            </div>
          
          <button
            style={{
              backgroundColor: "transparent",
              padding: "10px",
              border: "1px solid white",
              color: "white",
              width: "80px",
              
              cursor: "pointer",
            }}
            onClick={nextPage}
          >
            Next
          </button>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

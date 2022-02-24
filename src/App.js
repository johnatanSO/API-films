import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("")
  const [moviesList, setMoviesList] = useState([])
  let error = ""
  let key = 0
  
  const APIurl = `https://www.omdbapi.com/?s=${movieName}&apikey=604ab899`

   function searchMovies(event){
    event.preventDefault()
    fetch(APIurl).then((res)=>{
      return res.json()
    })
    .then((resposta)=>{
      
      if(resposta.Response === "False"){
        setMoviesList([])
        error = resposta.Error
      }else{
        setMoviesList(resposta.Search)
      }
    })
    .catch((err)=>{
      console.log(err)
    })

  } 

  function getMovieName(event){
    let text = event.target.value
    setMovieName(text)
  }


  if(moviesList.length == 0){
    return(
      <div className="container">
        <h1>JETFLIX</h1>
        <form>
          <input type='text' onChange={getMovieName}/>
          <button  onClick={searchMovies}>Search</button>

          <div>

          </div>
      </form>
      </div>
    )
  }
  else{
    return (
      <div className="container">
  
  
  
        <h1>JETFLIX</h1>
        <form>
          <input type='text' onChange={getMovieName}/>
          <button  onClick={searchMovies}>Search</button>
        </form>
        
  
        
        <div>
          <ul className="containerMovies">
            {moviesList.map((movie)=>{
              return(
                <li id={`movie-${key}`} key={key++}>

                  
                    <img className={movie.Poster=="N/A"? "notImage": "movieImage"} alt={movie.Title} src={movie.Poster=="N/A"? "./assets/video.png": movie.Poster}/>
                    <div className="dataMovie">
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                    </div>
                  
                  
  
                  
  
                </li>)})}
          </ul>
        </div>
  
  
  
      </div>
    );

  }

}

export default App;

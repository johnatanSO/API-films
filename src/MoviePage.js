import React, {useState, useEffect} from "react";
import './MoviePage.css'

function MoviePage(){
  let api = `https://www.omdbapi.com/?i=tt0944947&apikey=604ab899&`
  const [movie, setMovie] = useState("");
  useEffect(()=>{
    fetch(api)
      .then((res)=>{
        return res.json()
     })
      .then((resposta)=>{
        setMovie(resposta)
        console.log(resposta)
      })
  },[])

  return(
    <div className="content">
      <div className="movieDataContainer">

        <div className="imagePoster">
          <img className="movieImage" alt={movie.Title} src={movie.Poster}/>
        </div>

        <div className="title">
          <div className="time"><h3>{movie.Runtime}</h3><span>-</span><h3>{movie.Year}</h3></div>
          
          <h1 className="movieTitle">{movie.Title}</h1>

          <div className="rate"><img className="logoIMDB" src="./assets/logoIMDB.svg"/>{movie.imdbRating}/10</div>


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
    </div>
  )
}

export default MoviePage 
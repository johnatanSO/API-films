import React from 'react' 
import "./ContentMovies.css"

function ContentMovies(props){
  return(
    
      <div className={props.showMovies===true? "showMovies": "hiddenMovies"}>
        <button onClick={props.previousPage} className="backward"><img  alt ="." src="./assets/arrow.png"></img></button>
        <ul className="containerMovies">
              {props.moviesList.map((movie) => {
                return (
                  <li
                    onClick={() => {
                      props.navigate(`/moviePage/${movie.imdbID}`);
                    }}
                    id={movie.imdbID}
                    key={movie.imdbID}
                  >
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
            <button onClick={props.nextPage} className="forward"><img  alt ="." src="./assets/arrow.png"></img></button>
        </div>
  )

}

export default ContentMovies
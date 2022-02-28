import React from 'react' 
import "./ContentMovies.css"

function ContentMovies(props){
  return(
    <div className={props.showMovies===true? "showMovies": "hiddenMovies"}>
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
      </div>
  )

}

export default ContentMovies
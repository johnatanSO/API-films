import React from 'react' 
import "./ContentMovies.css"
import Movie from "../Movie/Movie"

function ContentMovies(props){
  let key = 1
  
  return(
    
      <div className={props.showMovies===true? "showMovies": "hiddenMovies"}>
        <button onClick={props.previousPage} className="backward"><img  alt ="." src="./assets/arrow.png"></img></button>
        <ul className="containerMovies">
              {props.moviesList.map((movie) => {
                

                return (
                  <Movie key={`${movie.imdbID}-${key++}`} movie={movie} navigate={props.navigate}></Movie>
                );
              })}
            </ul>
            <button onClick={props.nextPage} className="forward"><img  alt ="." src="./assets/arrow.png"></img></button>
        </div>
  )

}

export default ContentMovies
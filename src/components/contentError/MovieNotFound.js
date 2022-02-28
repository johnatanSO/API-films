import react from 'react';
import "./MovieNotFound.css"
function MovieNotFound(props){
  return (
    <div className="notFoundMovie">
      <img className="notImage" src="./assets/search.png" alt="video"/>
      <p className="error">{props.error}</p>
      <p>Try again</p>
    </div>
  )
}


export default MovieNotFound
import React from "react";

function InputSearch(props){
  return(
    <form>
      <input placeholder="Search your favorite movie :)" type='text' onChange={props.getMovieName}/>
      <button className='btnSearch'  onClick={props.searchMovies}>Search</button>
    </form>
  )
}


export default InputSearch
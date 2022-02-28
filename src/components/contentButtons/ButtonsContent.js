import React from 'react'
import "./Buttons.css"

function ButtonsContent(props){
  return( 
    <div className={props.showMovies===true? "buttonsPages showMovies": "hiddenMovies"}>
            <button
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                border: "1px solid white",
                color: "white",
                width: "80px",

                cursor: "pointer",
              }}
              onClick={props.previousPage}
            >
              Previous
            </button>
            <div className="totalResults">
              <span>
                {props.page}/{props.totalPages}
              </span>
              <span>({props.totalResults} results)</span>
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
              onClick={props.nextPage}
            >
              Next
            </button>
          </div>

  )
}


export default ButtonsContent
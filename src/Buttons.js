<div className="buttonsPages">
            <button
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                border: "1px solid white",
                color: "white",
                width: "80px",

                cursor: "pointer",
              }}
              onClick={previousPage}
            >
              Previous
            </button>
            <div className="totalResults">
              <span>
                {page}/{totalPages}
              </span>
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
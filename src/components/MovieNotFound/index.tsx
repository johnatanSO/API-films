import './MovieNotFound.module.scss'
export function MovieNotFound({ error }: any) {
  return (
    <div className="notFoundMovie">
      <img className="notImage" src="./assets/search.png" alt="video" />
      <p className="error">{error}</p>
      <p>Try again</p>
    </div>
  )
}

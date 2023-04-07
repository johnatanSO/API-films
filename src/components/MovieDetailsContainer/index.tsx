import style from './MovieDetailsContainer.module.scss'

interface MovieDetailsContainerProps {
  movieData: any
}

export function MovieDetailsContainer({
  movieData,
}: MovieDetailsContainerProps) {
  return (
    <div className={style.movieDetailsContainer}>
      <h1>{movieData?.Title}</h1>
    </div>
  )
}

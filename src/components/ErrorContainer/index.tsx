import { MoviesContext } from '@/src/contexts/MoviesContext'
import { useContext } from 'react'
import style from './ErrorContainer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export function ErrorContainer() {
  const { error } = useContext(MoviesContext)
  return (
    <div className={style.errorContainer}>
      <FontAwesomeIcon className={style.errorIcon} icon={faCircleExclamation} />
      <h1>{error?.message}</h1>
      <span>{error?.secondaryMessage}</span>
    </div>
  )
}

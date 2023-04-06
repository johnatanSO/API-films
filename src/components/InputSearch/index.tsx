import { MoviesContext } from '@/src/contexts/MoviesContext'
import { api } from '@/src/lib/axios'
import React, { useContext, useState } from 'react'
import style from './InputSearch.module.scss'

export function InputSearch() {
  const { setMovies } = useContext(MoviesContext)
  const [searchStringMovie, setSearchStringMovie] = useState<string>('')

  function searchMovies(event: any) {
    event.preventDefault()
    if (!searchStringMovie) return undefined

    const page = 1
    const URL = ''

    api
      .get(URL, {
        params: {
          s: searchStringMovie,
          apikey: '604ab899',
          page,
        },
      })
      .then((res: any) => {
        console.log(res)
        setMovies(res?.data?.Search)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  return (
    <form className={style.form} onSubmit={searchMovies}>
      <input
        placeholder="Procure seu filme favorito..."
        type="text"
        onChange={(e) => {
          setSearchStringMovie(e.target.value)
        }}
        value={searchStringMovie}
      />
      <button type="submit" className={style.btnSearch}>
        Buscar
      </button>
    </form>
  )
}

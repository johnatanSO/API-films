import { MoviesContext } from '@/src/contexts/MoviesContext'
import { api } from '@/src/lib/axios'
import React, { useContext, useState } from 'react'
import style from './InputSearch.module.scss'

export function InputSearch() {
  const { setMovies, setError, setPagination, pagination } =
    useContext(MoviesContext)
  const [searchStringMovie, setSearchStringMovie] = useState<string>('')
  const [loadingMovies, setLoadingMovies] = useState<boolean>(false)

  function searchMovies(event: any) {
    event.preventDefault()
    if (!searchStringMovie) return undefined
    setLoadingMovies(true)

    const page = pagination.page
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
        if (res.data.Response === 'True') {
          setMovies(res?.data?.Search)
          setPagination({
            totalResults: res.data.totalResults,
            totalPages:
              Number(res.data.totalResults) / res?.data?.Search.length,
          })
        } else {
          setMovies([])
          if (res.data.Error === 'Movie not found!') {
            setError({
              message: 'Infelizmente nenhum filme foi encontrado :(',
              secondaryMessage: 'Tente novamente',
            })
          }
        }
      })
      .catch((err: any) => {
        console.log('por', err)
      })
      .finally(() => {
        setLoadingMovies(false)
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
      <button
        disabled={loadingMovies}
        type="submit"
        className={style.btnSearch}
      >
        Buscar
      </button>
    </form>
  )
}

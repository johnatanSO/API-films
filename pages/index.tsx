import { InputSearch } from '@/src/components/InputSearch'
import { MoviesContainer } from '@/src/components/MoviesContainer'
import { MoviesContext } from '@/src/contexts/MoviesContext'
import { useContext } from 'react'

export default function Home() {
  const { movies } = useContext(MoviesContext)

  return (
    <>
      <InputSearch />
      {movies?.length > 0 && <MoviesContainer />}
    </>
  )
}

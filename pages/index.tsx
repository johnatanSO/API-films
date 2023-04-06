import { Header } from '@/src/components/Header'
import { InputSearch } from '@/src/components/InputSearch'
import { MoviesContainer } from '@/src/components/MoviesContent'
import { MoviesContext } from '@/src/contexts/MoviesContext'
import { useContext } from 'react'

export default function Home() {
  const { movies } = useContext(MoviesContext)

  return (
    <>
      <Header />
      <InputSearch />
      {movies?.length > 0 && <MoviesContainer />}
    </>
  )
}

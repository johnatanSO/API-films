import { createContext, ReactNode, useState } from 'react'

interface MovieContextType {
  movies: any[]
  setMovies: (filmes: any[]) => void
}

export const MoviesContext = createContext({} as MovieContextType)

interface MoviesProviderProps {
  children: ReactNode
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<any>([])

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  )
}

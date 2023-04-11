import { createContext, ReactNode, useState } from 'react'

interface Error {
  message: string
  secondaryMessage?: string
}

interface MovieContextType {
  movies: any[]
  error: Error | undefined
  pagination: any
  setError: (error: Error) => void
  setMovies: (filmes: any[]) => void
  setPagination: (pagesData: any) => void
}

export const MoviesContext = createContext({} as MovieContextType)

interface MoviesProviderProps {
  children: ReactNode
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<any>([])
  const [error, setError] = useState<Error | undefined>(undefined)
  const [pagination, setPagination] = useState<any>({
    page: 1,
    totalResults: 0,
    totalPages: 0
  })

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, error, setError, pagination, setPagination }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

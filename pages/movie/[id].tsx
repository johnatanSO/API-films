import { MovieDetailsContainer } from '@/src/components/MovieDetailsContainer'
import { api } from '@/src/lib/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface MovieData {}

export default function Movie() {
  const router = useRouter()
  const [movieData, setMovieData] = useState<MovieData | undefined>(undefined)
  useEffect(() => {
    const URL = '/'
    api
      .get(URL, {
        params: {
          i: router.query.id,
          apikey: '604ab899',
        },
      })
      .then((response) => {
        setMovieData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [router.query])
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 82px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <MovieDetailsContainer movieData={movieData} />
    </div>
  )
}

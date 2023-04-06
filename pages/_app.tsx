import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MoviesProvider } from '@/src/contexts/MoviesContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jetflix</title>
      </Head>
      <MoviesProvider>
        <Component {...pageProps} />
      </MoviesProvider>
    </>
  )
}

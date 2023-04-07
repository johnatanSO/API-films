import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MoviesProvider } from '@/src/contexts/MoviesContext'
import { Header } from '@/src/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jetflix</title>
      </Head>
      <Header />
      <MoviesProvider>
        <Component {...pageProps} />
      </MoviesProvider>
    </>
  )
}

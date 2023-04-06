import React from 'react'
import App from './pages/mainPage/App'
import MoviePage from './pages/moviePage/MoviePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moviePage/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

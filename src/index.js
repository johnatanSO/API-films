import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/mainPage/App';
import MoviePage from './pages/moviePage/MoviePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/moviePage/:id" element={<MoviePage />} />
        <Route path="*" element={<h1>Not found! 404</h1>} />
      </Routes>
    </BrowserRouter>
      
  </React.StrictMode>,
  document.getElementById('root')
);
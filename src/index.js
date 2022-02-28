import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/mainPage/App';
import MoviePage from './pages/moviePage/MoviePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './Router'
ReactDOM.render(
  <React.StrictMode>
    <Router />
      
  </React.StrictMode>,
  document.getElementById('root')
);
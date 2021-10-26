import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import Routes from './routes';

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;

import React from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const { films } = TMDB;

const App = () => {
    return (
        <div className="film-library">
          <FilmListing films={films} />
          <FilmDetails films={films} />
        </div>
    );
}
export default App;

import React, { useState } from 'react';
import "./MoviesCard.css";
import convertDuration from '../../utils/convertDuration';
import { MOVIES_API_URL } from '../../constants/AppConstants';


const MoviesCard = ({ movie }) => {
  const [isLike, setLike] = useState(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) ?? []
    return Array.from(savedMovies).find((savedMovie) => savedMovie.id === movie.id) != null
  });

  const handleToggle = () => {
    setLike(!isLike);

    if (!isLike) {
      let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) ?? []
      savedMovies = [...savedMovies, movie]
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
    }
    else {
      let savedMovies = JSON.parse(localStorage.getItem('savedMovies')) ?? []
      savedMovies = Array.from(savedMovies).filter((savedMovie) => savedMovie.id !== movie.id)
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
    }
  };
  return (
      <li className="movies-card">
        <button type="button" className={!isLike ? "movies-card__content-btn-like" : "movies-card__content-btn-like-active"} onClick={handleToggle}></button>
        <img
          className="movies-card__img"
          alt="изображение фильма"
          src={`${MOVIES_API_URL}/${movie.image.url}`}
        />

        <div className="movies-card__content">

          <div className="movies-card__content-text">
            <h2 className="movies-card__content-text-title">{movie.nameRU}</h2>
            <p className="movies-card__content-text-duration">{convertDuration(movie.duration)}</p>
          </div>

        </div>
      </li>
  );
};

export default MoviesCard;

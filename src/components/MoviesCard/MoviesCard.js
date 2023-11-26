import React, { useState } from 'react';
import "./MoviesCard.css";
import imageCard from "../../images/image-card.jpg";


const MoviesCard = () => {
  const [isLike, setLike] = useState("false");
  const handleToggle = () => {
    setLike(!isLike);
  };
  return (
      <li className="movies-card">
        <button type="button" className={isLike ? "movies-card__content-btn-like" : "movies-card__content-btn-like-active"} onClick={handleToggle}></button>
        <img
          className="movies-card__img"
          alt="изображение фильма"
          src={imageCard}
        />

        <div className="movies-card__content">

          <div className="movies-card__content-text">
            <h2 className="movies-card__content-text-title">Бег это свобода</h2>
            <p className="movies-card__content-text-duration">1ч 44м</p>
          </div>

        </div>
      </li>
  );
};

export default MoviesCard;

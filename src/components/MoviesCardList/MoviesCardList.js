import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({ movies }) {
  if (!movies?.length) {
    return <ul className="movies-list" />
  }

  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesCardList;

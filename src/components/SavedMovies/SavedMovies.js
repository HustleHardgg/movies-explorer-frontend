import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  return (
    <main className="save-movies">
      <SearchForm />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;

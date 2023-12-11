import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { searchAndFilterMovies } from "../../utils/utils";

function SavedMovies({ moviesCardList, onDelete }) {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isSearchComplited, setIsSearchComplited] = useState(false);

  const [keyWord, setKeyWord] = useState("");
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const handleSearchMovies = (keyWord, checkBoxStatus) => {
    setKeyWord(keyWord);
    setCheckBoxStatus(checkBoxStatus);
    setSearchMovies(
      searchAndFilterMovies(moviesCardList, keyWord, checkBoxStatus)
    );
    setIsSearchComplited(true);
  };

  useEffect(() => {
    if (searchMovies.length > 0) {
      setSearchMovies(
        searchAndFilterMovies(moviesCardList, keyWord, checkBoxStatus)
      );
    } else {
      setSearchMovies(moviesCardList);
    }
  }, [moviesCardList]);

  return (
    <main className="save-movies">
      <SearchForm onSearchMovies={handleSearchMovies} savedMoviesRoute={true} />
      {isSearchComplited ? (
        searchMovies.length > 0 ? (
          <MoviesCardList
            savedMoviesRoute={true}
            movies={searchMovies}
            onDelete={onDelete}
            isSaved={true}
          />
        ) : (
          <span className="movies-form__error">Ничего не найдено.</span>
        )
      ) : (
        <MoviesCardList
          movies={moviesCardList}
          onDelete={onDelete}
          isSaved={true}
        />
      )}
    </main>
  );
}

export default SavedMovies;

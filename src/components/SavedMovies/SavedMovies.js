import React, { useMemo, useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = () => {
  const [searchValue, setSearchValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)

  const visibleMovies = useMemo(() => {
    const movies = JSON.parse(localStorage.getItem('savedMovies')) ?? []
    let filteredMovies = movies
      .filter((movie) => movie.nameRU?.includes(searchValue))

    if (checkboxValue) {
      filteredMovies = filteredMovies.filter(movie => movie.duration <= 40)
    }

    return filteredMovies
  }, [checkboxValue, searchValue])

  const searchSavedMovies = (searchValue) => {
    setSearchValue(searchValue);
  }

  return (
    <main className="save-movies">
      <SearchForm
        checkboxValue={checkboxValue} 
        setCheckboxValue={setCheckboxValue}  
        searchSavedMovies={searchSavedMovies}
      />
      <MoviesCardList movies={visibleMovies} />
    </main>
  );
};

export default SavedMovies;

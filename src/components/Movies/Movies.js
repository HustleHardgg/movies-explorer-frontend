import React, { useEffect, useMemo, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getMovies as fetchGetMovies } from "../../services/MoviesApi";
import Preloader from "../Preloader/Preloader";

const Movies = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(12)
  const [filterSearchValue, setFilterSearchValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false)

  const moreMovies = () => {
    // add one row of movies
    
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      setVisibleMoviesCount((prev) => prev + 2)
      return;
    }
    setVisibleMoviesCount((prev) => prev + 3)
  }

  const visibleMovies = useMemo(() => {
    let filteredMovies = movies.filter((movie) => movie.nameRU?.includes(filterSearchValue))

    if (checkboxValue) {
      filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40)
    }

    return filteredMovies.slice(0, visibleMoviesCount)
  }, [visibleMoviesCount, movies, filterSearchValue, checkboxValue]) 

  useEffect(() => {
    getMovies()
  }, [])

  async function getMovies() {
    try {
      setLoading(true)
      const data = await fetchGetMovies();
      setMovies(data)
    } catch (err) {
      setLoading(false)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  function handleSearchSubmit(searchValue) {
    setFilterSearchValue(searchValue)
  }

  return (
    <main className="movies">
      <SearchForm 
        checkboxValue={checkboxValue} 
        setCheckboxValue={setCheckboxValue} 
        handleSearchSubmit={handleSearchSubmit} 
      />
      {loading ? (
        <Preloader />
      ) : (
        <>
        <MoviesCardList movies={visibleMovies} />
        <div className="btn-content">
          <button onClick={moreMovies} className="btn-content__btn-more" type="button">
            Ещё
          </button>
        </div>
        </>
      )}
    </main>
  );
};

export default Movies;

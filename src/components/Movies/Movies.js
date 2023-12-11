import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import * as MoviesApi from "../../utils/MoviesApi";
import {
  changeMovies,
  findShortMovies,
  searchAndFilterMovies,
} from "../../utils/utils";

import {
  WIDTH_1280,
  WIDTH_480,
  WIDTH_768,
  COUNT_5,
  COUNT_8,
  COUNT_12,
  TABLET_MOBILE_ADDING,
  DESKTOP_WIDTH_ADDING,
} from "../../utils/const";

export function Movies({ moviesCardList, onSave, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchMessage, setSearchMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSearchComplited, setIsSearchComplited] = useState(false);

  const [keyWord, setKeyWord] = useState("");
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);

  const [initialMovies, setInitialMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  const [renderMovies, setRenderMovies] = useState([]);

  const [isMore, setIsMore] = useState(false);
  const [count, setCount] = useState(0);
  const [adding, setAdding] = useState(0);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const listenResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", listenResize);
    return () => {
      window.removeEventListener("resize", listenResize);
    };
  }, [screenSize]);

  useEffect(() => {
    if (screenSize > WIDTH_1280) {
      setCount(COUNT_12);
      setAdding(DESKTOP_WIDTH_ADDING);
    } else if (screenSize > WIDTH_768) {
      setCount(COUNT_12);
      setAdding(TABLET_MOBILE_ADDING);
    } else if (screenSize <= WIDTH_768 && screenSize >= WIDTH_480) {
      setCount(COUNT_8);
      setAdding(TABLET_MOBILE_ADDING);
    } else if (screenSize < WIDTH_480) {
      setCount(COUNT_5);
      setAdding(TABLET_MOBILE_ADDING);
    }
  }, [screenSize]);

  const moviesLoadMore = () => {
    setRenderMovies((prev) =>
      searchMovies.slice(0, prev.length + adding)
    );
  };

  useEffect(() => {
    if (searchMovies.length > 0) {
      if (searchMovies.length > count) {
        setRenderMovies(searchMovies.slice(0, count));
        setIsMore(true);
      } else {
        setRenderMovies(searchMovies);
      }
    } else if (searchMovies.length === 0) {
      setIsSearchComplited(true);
      setRenderMovies([]);
    }
  }, [count, searchMovies]);

  const handleSearchFilterMovies = (movies, kyeWord, checkBoxStatus) => {
    const moviesList = searchAndFilterMovies(movies, kyeWord, checkBoxStatus);

    setSearchMovies(moviesList);
    localStorage.setItem("movies", JSON.stringify(moviesList));

    setIsSearchComplited(true);
  };

  const handleSearchMovies = (keyWord, checkBoxStatus) => {
    setRenderMovies([]);
    setKeyWord(keyWord);
    setCheckBoxStatus(checkBoxStatus);

    localStorage.setItem("keyWord", keyWord);
    localStorage.setItem("checkBoxStatus", checkBoxStatus);

    if (!initialMovies.length) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((data) => {
          changeMovies(data);
          setInitialMovies(data);
          handleSearchFilterMovies(data, keyWord, checkBoxStatus);
        })
        .catch((err) => {
          setIsError(true);
          setSearchMessage(
            "Во время запроса произошла ошибка. Пожалуйста попробуйте ещё раз."
          );
          localStorage.removeItem("movies");
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleSearchFilterMovies(initialMovies, keyWord, checkBoxStatus);
      setIsLoading(false);
      setIsError(false);
    }
  };

  useEffect(() => {
    const arrMovies = JSON.parse(localStorage.getItem("movies"));

    setRenderMovies(arrMovies);
    if (arrMovies && !keyWord) {
      setCheckBoxStatus(checkBoxStatus);
      setSearchMovies(
        checkBoxStatus ? findShortMovies(arrMovies) : arrMovies
      );
    }
  }, [checkBoxStatus, keyWord]);

  useEffect(() => {
    if (keyWord) {
      const arrMovies = searchAndFilterMovies(
        initialMovies,
        keyWord,
        checkBoxStatus
      );
      setSearchMovies(arrMovies);
    }
  }, [keyWord, checkBoxStatus, initialMovies]);

  useEffect(() => {
    if (renderMovies) {
      if (renderMovies.length === searchMovies.length) {
        setIsMore(false);
      } else {
        setIsMore(true);
      }
    }
  }, [searchMovies, renderMovies]);

  return (
    <main className="movies">
      <SearchForm onSearchMovies={handleSearchMovies} />
      {isLoading ? (
        <Preloader />
      ) : isSearchComplited ? (
        renderMovies && searchMovies.length > 0 ? (
          <MoviesCardList
            movies={renderMovies}
            moviesCardList={moviesCardList}
            onSave={onSave}
            onDelete={onDelete}
          />
        ) : searchMovies.length === 0 && initialMovies.length > 0 ? (
          <span className="movies-form__error">Ничего не найдено.</span>
        ) : (
          ""
        )
      ) : (
        isError && <span className="movies-form__error">{searchMessage}</span>
      )}
      <div className="btn-content">
        {isMore && (
          <button
            className="btn-content__btn-more"
            type="button"
            onClick={moviesLoadMore}
          >
            Ещё
          </button>
        )}
      </div>
    </main>
  );
}

export default Movies;

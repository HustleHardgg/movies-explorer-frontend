import React, { useState, useEffect } from "react";
import {
  Route,
  Navigate,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as auth from "../../utils/auth";
import * as MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import HeaderMain from "../Header__main/Header__main";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    handleTokenCheck();
  }, []);

  // запрос для контекста пользователя
  useEffect(() => {
    loggedIn && handleGetUser();
  }, [loggedIn]);

  // получение фильмов пользователя
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      MainApi.getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [currentUser]);

  function handleTokenCheck() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth
        .checkToken(jwt)
        .then((res) => {
          if (res) setLoggedIn(true);
          navigate(location.pathname);
        })
        .catch((err) => {
          navigate("/signup");
          console.log(`Ошибка проверки токена: ${err}`);
          setLoggedIn(false);
        });
    }
  }

  function handleLoginSubmit(email, password) {
    auth
      .authorization(email, password)
      .then((res) => {
        if (res) {
          setErrorMessage("Авторизация прошла успешно!");
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        setErrorMessage("Ошибка авторизации");
        console.log(err);
      });
  }

  const handleRegisterSubmit = (userData) => {
    auth
      .register(userData)
      .then(() => {
        handleLoginSubmit(userData);
        setErrorMessage("Регистрация прошла успешно!");
      })
      .catch((err) => {
        setErrorMessage("Ошибка регистрации");
        console.log(err);
      });
  };
  function exitUser() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }

  //сохранение фильмов
  const handleSaveMovie = (movie) => {
    const newMovie = {
      country: movie.country || "unknown",
      director: movie.director || "unknown",
      duration: movie.duration,
      year: movie.year || "no data",
      description: movie.description || "no data",
      image: movie.image,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail,
      movieId: movie.id,
      nameRU: movie.nameRU || "no name",
      nameEN: movie.nameEN || "no name",
    };

    MainApi.saveMovie(newMovie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };

  //удаление фильма из cохраненных фильмов
  const handleDeleteMovie = (movie) => {
    MainApi.deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((m) => m._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // обновлене данных пользователя
  function handleChangeProfile(userData) {
    MainApi.setUpdateUserInfo(userData.name, userData.email)
      .then((res) => {
        setCurrentUser(res);
        setErrorMessage("Данные успешно обновлены!");
      })
      .catch((err) => {
        setErrorMessage("Ошибка обновления данных");
        console.log(err);
      });
  }

  //  запрост на данные пользователя
  function handleGetUser() {
    MainApi.getUser()
      .then((res) => {
        console.log(res);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log();

  useEffect(() => {
    const timer = setTimeout(() => setErrorMessage(""), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderMain loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            element={<ProtectedRoute loggedIn={loggedIn}></ProtectedRoute>}
          >
            <Route
              path="/movies"
              element={
                <>
                  <Header />
                  <Movies
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                    moviesCardList={savedMovies}
                  />
                  <Footer />
                </>
              }
            ></Route>

            <Route
              path="/saved-movies"
              element={
                <>
                  <Header />
                  <SavedMovies
                    onDelete={handleDeleteMovie}
                    moviesCardList={savedMovies}
                  />
                  <Footer />
                </>
              }
            ></Route>

            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <Profile
                    onSignOut={exitUser}
                    userChange={handleChangeProfile}
                    message={errorMessage}
                  />
                </>
              }
            ></Route>
          </Route>
          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register
                  onRegister={handleRegisterSubmit}
                  message={errorMessage}
                />
              )
            }
          ></Route>

          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login onLogin={handleLoginSubmit} message={errorMessage} />
              )
            }
          ></Route>

          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

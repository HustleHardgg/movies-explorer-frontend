import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import HeaderMain from "../Header__main/Header__main";



function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderMain/>
              <Main />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/saved-movies"
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        ></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigate">
      <Link className="navigate__link" to="/movies">
        Фильмы
      </Link>

      <Link className="navigate__link" to="/saved-movies">
        Сохраненные фильмы
      </Link>
    </nav>
  );
}

export default Navigation;

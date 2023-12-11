import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigate">
      <>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigate__link_active" : "navigate__link"
          }
          to="/movies"
        >
          Фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navigate__link_active" : "navigate__link"
          }
          to="/saved-movies"
        >
          Сохраненные фильмы
        </NavLink>
      </>
    </nav>
  );
}

export default Navigation;

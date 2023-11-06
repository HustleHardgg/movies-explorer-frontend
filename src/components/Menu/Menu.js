import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ isOpen, handleClick, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const closeByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={isOpen ? "menu__left" : "menu__left menu__left_none"}
        onClick={closeByOverlay}
      ></div>

      <div
        className={isOpen ? "menu menu_opened" : "menu"}
        onClick={closeByOverlay}
      >
        <button
          className="menu-btn"
          type="button"
          onClick={handleClick}
          onClose={onClose}
        ></button>

        <nav className="navigate__menu">
          <Link className="navigate__menu-link" to="/">
            Главная
          </Link>

          <Link className="navigate__menu-link" to="/movies">
            Фильмы
          </Link>

          <Link className="navigate__menu-link" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </nav>
        <Link className="navigate__menu-link" to="/profile">
          <button className="menu__btn-account">
            Аккаунт<svg className="menu__btn-account-img"></svg>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Menu;

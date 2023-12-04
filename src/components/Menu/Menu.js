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
        className={isOpen ? "menu-left" : "menu-left menu-left_none"}
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

        <nav className="navigate-menu">
          <Link className="menu-link" to="/">
            Главная
          </Link>

          <Link className="menu-link" to="/movies">
            Фильмы
          </Link>

          <Link className="menu-link" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </nav>
        <Link className="menu-link" to="/profile">
          <button type="button" className="menu-btn-account">
            Аккаунт<svg className="menu-btn-account-img"></svg>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Menu;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__info">
        <span className="footer__info-span">© 2022</span>
        <nav className="footer__info-nav">
          <a
            className="footer__info-nav__element"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__info-nav__element"
            href="https://github.com/altwebga"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

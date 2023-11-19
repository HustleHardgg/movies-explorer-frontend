import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a
              href="https://github.com/HustleHardgg/how-to-learn"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__link"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__list-item">
            <a
              href="https://github.com/HustleHardgg/russian-travel-main"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__link"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__list-item">
            <a
              href="https://github.com/HustleHardgg/react-mesto-api-full-gha"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio__link"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;

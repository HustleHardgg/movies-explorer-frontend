import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
    <section className="not-found">
      <p className="not-found__err-number">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <Link to="/"><button type="button" className="not-found__back">Назад</button></Link>
    </section>
    </main>
  );
};

export default NotFound;

import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <p className="not-found__err-number">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <p className="not-found__back">Назад</p>
    </section>
  );
};

export default NotFound;

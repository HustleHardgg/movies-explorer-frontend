import React from "react";
import "./AboutMe.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import foto from "../../images/foto.jpg";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className="about-me" id="me">
      <ProjectTitle title="Студент" />
      <div className="about-me__content">
        <div className="about-me__info">
          <div className="about-me__info-text">
            <h2 className="about-me__info-text__name">Виталий</h2>
            <p className="about-me__info-text__job">
              Фронтенд-разработчик 30 лет
            </p>
            <p className="about-me__info-text__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <nav className="about-me__info-text__nav">
              <a
                className="about-me__info-text__nav-element"
                href="https://github.com/altwebga"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </nav>
          </div>
          <div className="about-me__info-foto">
            <img
              className="about-me__info-foto__foto"
              src={foto}
              alt="фото портфолио"
            />
          </div>
        </div>
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;

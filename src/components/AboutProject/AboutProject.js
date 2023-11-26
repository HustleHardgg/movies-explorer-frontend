import React from "react";
import "./AboutProject.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <ProjectTitle title="О проекте" />
      <div className="about-project__info">
        <div className="about-project__description">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ul className="about-project__graph">
        <li className="about-project__graph-element about-project__graph-element-week-back">
          1 неделя
        </li>
        <li className="about-project__graph-element about-project__graph-element-week-front">
          4 недели
        </li>
        <li className="about-project__graph-element about-project__graph-element-week-text">
          Back-end
        </li>
        <li className="about-project__graph-element about-project__graph-element-week-text">
          Front-end
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;

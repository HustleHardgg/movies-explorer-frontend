import React from "react";
import "./Techs.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";

const Techs = () => {
  return (
    <section className="techs" id="techs">
      <ProjectTitle title="Технологии" />
      <div className="techs__content">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>

      <div className="technologies__list">
        <div className="technologies__list-element">HTML</div>
        <div className="technologies__list-element">CSS</div>
        <div className="technologies__list-element">JS</div>
        <div className="technologies__list-element">React</div>
        <div className="technologies__list-element">Git</div>
        <div className="technologies__list-element">Express.js</div>
        <div className="technologies__list-element">mongoDB</div>
      </div>
    </section>
  );
};

export default Techs;

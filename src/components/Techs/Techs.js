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

      <ul className="technologies-list">
        <li className="technologies-list-element">HTML</li>
        <li className="technologies-list-element">CSS</li>
        <li className="technologies-list-element">JS</li>
        <li className="technologies-list-element">React</li>
        <li className="technologies-list-element">Git</li>
        <li className="technologies-list-element">Express.js</li>
        <li className="technologies-list-element">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;

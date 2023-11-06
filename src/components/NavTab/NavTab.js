import React from "react";
import "./NavTab.css";

const NavTab = () => {
  return (
    <section className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a className="nav__link" href="#about-project">
            О проекте
          </a>
        </li>

        <li className="nav__list-item">
          <a className="nav__link" href="#techs">
            Технологии
          </a>
        </li>

        <li className="nav__list-item">
          <a className="nav__link" href="#me">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavTab;

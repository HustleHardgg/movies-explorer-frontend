import { Link } from "react-router-dom";
import React from "react";
import "./Form.css";
import Logo from "../../images/logo__COLOR_main-1.png";

function Form({ title, children, btntext, text, path, pathname }) {
  return (
    <div className="form">
      <div className="form-up">
       <Link to="/"> <img className="logo" alt="Логотип" src={Logo} /></Link>
        <h3 className="form-up-title">{title}</h3>
      </div>

      <form className="form-content">{children}</form>

      <div className="form-btn">
        <button className="form-btn__item" type="submit">
          {btntext}
        </button>

        <p className="form-btn__item-text">
          {text}
          <a className="form-btn__item-path" href={path}>
            {pathname}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Form;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Form.css";
import Logo from "../../images/logo.svg";

function Form({
  title,
  children,
  btntext,
  text,
  path,
  pathname,
  isValid,
  onSubmit,
}) {
  return (
    <div className="form">
      <div className="form-up">
        <NavLink to="/">
          <img className="header__logo" src={Logo} alt="Лого" />
        </NavLink>
        <h3 className="form-up-title">{title}</h3>
      </div>

      <form className="form-content" onSubmit={onSubmit} noValidate>
        {children}
        <div className="form-btn">
          <button
            className={`form-btn__item ${
              !isValid && "form-btn__item-disabled"
            }`}
            disabled={isValid ? false : true}
            type="submit"
          >
            {btntext}
          </button>

          <p className="form-btn__item-text">
            {text}
            <a className="form-btn__item-path" href={path}>
              {pathname}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;

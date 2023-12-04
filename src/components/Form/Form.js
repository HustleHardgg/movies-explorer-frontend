import { Link } from "react-router-dom";
import React from "react";
import "./Form.css";
import Logo from "../../images/logo.svg";

function Form({ title, children, btntext, text, path, pathname }) {
  return (
  <main className="main">
    <form className="form">
      <div className="form-up">
       <Link to="/"> <img className="logo" alt="Логотип" src={Logo} /></Link>
        <h1 className="form-up-title">{title}</h1>
      </div>

      <form className="form-content">{children}

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
      </form>
    </form>
  </main>
  );
}

export default Form;

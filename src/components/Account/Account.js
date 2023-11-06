import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Account() {
  return (
    <nav className="header__navigate">
      <Link className="header__navigate-text" to="/profile">
        <button className="menu__btn-account">
          Аккаунт<svg className="menu__btn-account-img"></svg>
        </button>
      </Link>
    </nav>
  );
}

export default Account;

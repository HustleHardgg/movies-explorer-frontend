import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Account() {
  return (
    <nav className="header__navigate">
      <Link className="header__navigate-text" to="/profile">
        <div className="menu-btn-account">
          Аккаунт<svg className="menu-btn-account-img"></svg>
        </div>
      </Link>
    </nav>
  );
}

export default Account;

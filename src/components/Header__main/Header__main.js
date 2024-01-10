import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Header__main.css";
import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import Menu from "../Menu/Menu";
import MenuBtnMobile from "../MenuBtnMobile/MenuBtnMobile";
import { TOKEN } from "../../constants/AppConstants";

function Header__main() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem(TOKEN) != null

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 769;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleClickMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  if (width < breakpoint) {
    return (
      <header className="header header-main">
        <Link className="header__logo" to="/home">
          <img src={Logo} alt="Лого" />
        </Link>
        {!isAuthenticated && (
          <nav className="header__link">
            <Link className="header__link-element" to="/signup">
              Регистрация
            </Link>
            <Link className="header__link-element" to="/signin">
              Войти
            </Link>
          </nav>
        )}

        {isAuthenticated && (
          <>
            <MenuBtnMobile
              isOpen={isMobileMenuOpen}
              handleClick={handleClickMobileMenu}
            />
            <Menu
              isOpen={isMobileMenuOpen}
              handleClick={handleClickMobileMenu}
              onClose={handleCloseMobileMenu}
            />
          </>
        )}
      </header>
    );
  }

  return (
    <header className="header header-main">
        <Link className="header__logo" to="/home">
        <img src={Logo} alt="Лого" />
        </Link>

      {!isAuthenticated && (
        <nav className="header__link">
          <Link className="header__link-element" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link-element" to="/signin">
            Войти
          </Link>
        </nav>
      )}

      {isAuthenticated && (
        <>
          <Navigation />
          <Account />
        </>
      )}
    </header>
  );
}

export default Header__main;

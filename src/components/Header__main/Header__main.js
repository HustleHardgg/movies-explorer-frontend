import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Header__main.css";
import Logo from "../../images/logo__COLOR_main-1.png";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import Menu from "../Menu/Menu";
import MenuBtnMobile from "../MenuBtnMobile/MenuBtnMobile";

function Header__main() {
  const location = useLocation();

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
      <header className="header__main">
        <Link className="header__main_logo" to="/">
        <img src={Logo} alt="Лого" />
        </Link>
        {location.pathname === "/" && (
          <nav className="header__main_link">
            <Link className="header__main_link-element" to="/signup">
              Регистрация
            </Link>
            <Link className="header__main_link-element" to="/signin">
              Войти
            </Link>
          </nav>
        )}

        {location.pathname === "/movies" && (
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

        {location.pathname === "/saved-movies" && (
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

        {location.pathname === "/profile" && (
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
    <header className="header__main">
        <Link className="header__main_logo" to="/">
        <img src={Logo} alt="Лого" />
        </Link>

      {location.pathname === "/" && (
        <nav className="header__main_link">
          <Link className="header__main_link-element" to="/signup">
            Регистрация
          </Link>
          <Link className="header__main_link-element" to="/signin">
            Войти
          </Link>
        </nav>
      )}

      {location.pathname === "/movies" && (
        <>
          <Navigation />
          <Account />
        </>
      )}

      {location.pathname === "/saved-movies" && (
        <>
          <Navigation />
          <Account />
        </>
      )}

      {location.pathname === "/profile" && (
        <>
          <Navigation />
          <Account />
        </>
      )}
    </header>
  );
}

export default Header__main;

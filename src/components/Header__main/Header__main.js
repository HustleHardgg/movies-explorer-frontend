import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header__main.css";
import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import Menu from "../Menu/Menu";
import MenuBtnMobile from "../MenuBtnMobile/MenuBtnMobile";

function Header({ loggedIn }) {
  const location = useLocation();

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

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
        <NavLink to="/">
          <img className="header__logo" src={Logo} alt="Лого" />
        </NavLink>

        {location.pathname === "/" && loggedIn ? (
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
        ) : (
          ""
        )}

        {location.pathname === "/movies" && !loggedIn ? (
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
        ) : (
          ""
        )}

        {location.pathname === "/saved-movies" && !loggedIn ? (
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
        ) : (
          ""
        )}

        {location.pathname === "/profile" && !loggedIn ? (
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
        ) : (
          ""
        )}
      </header>
    );
  }

  return (
    <header className="header header-main">
      <NavLink to="/">
        <img className="header__logo" src={Logo} alt="Лого" />
      </NavLink>

      {location.pathname === "/" && !loggedIn ? (
        <nav className="header__link">
          <Link className="header__link-element" to="/signup">
            Регистрация
          </Link>
          <Link className="header__link-element" to="/signin">
            Войти
          </Link>
        </nav>
      ) : (
        <>
          <Navigation />
          <Account />
        </>
      )}
    </header>
  );
}

export default Header;

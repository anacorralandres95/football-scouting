import React from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import logo from "../../assets/img/Logo-ChampionsW.png";
import "./header.css";

function Header() {
  return (
    <React.Fragment>
      <header>
        <section className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </section>

        <p id="aviso">{formatMessage("Sólo disponible en versión Desktop")}</p>

        <nav className="menu-nav">
          <ul>
            <li>
              <button className="nav">
                <Link to="/contact">{formatMessage("Contacto")}</Link>
              </button>
            </li>

            <li>
              <button className="nav">
                <Link to="/about-us">{formatMessage("Sobre nosotros")}</Link>
              </button>
            </li>
            <li>
              <button className="nav">
                <Link to="/terms-conditions">
                  {formatMessage("Términos y condiciones")}
                </Link>
              </button>
            </li>
            <li>
              <button className="login-nav">
                <Link to="/login">{formatMessage("Login")}</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { Header };

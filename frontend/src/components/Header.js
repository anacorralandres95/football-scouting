import React from "react";
import { Link } from "react-router-dom";
import "../css/header-footer.css";
import logo from "../assets/img/Logo-ChampionsW.png";

function Header() {
  return (
    <React.Fragment>
      <header>
        <section className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </section>

        <p id="aviso">Sólo disponible en versión Desktop</p>

        <nav className="menu-nav">
          <ul>
            <li>
              <button className="nav">
                <Link to="/contact">CONTACTO</Link>
              </button>
            </li>

            <li>
              <button className="nav">
                <Link to="/about-us">SOBRE NOSOTROS</Link>
              </button>
            </li>
            <li>
              <button className="nav">
                <Link to="/terms-conditions">TÉRMINOS Y CONDICIONES</Link>
              </button>
            </li>
            <li>
              <button className="login-nav">
                <Link to="/login">LOGIN</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { Header };

import React from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import logo from "../../assets/img/Logo-ChampionsWhite.png";
import twitter from "../../assets/icons/twitter.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <section className="logo">
          <img src={logo} alt="Logo" />
        </section>

        <section className="contact-footer">
          <h2>{formatMessage("Contacto")}</h2>
          <p>{formatMessage("Av. Linares Rivas, 50, 51, 15005 A Coruña")}</p>
          <p>{formatMessage("+34 587 348 428")}</p>
          <p>{formatMessage("info@champions.com")}</p>
        </section>

        <section className="follow-footer">
          <h2>{formatMessage("Síguenos")}</h2>
          <p>
            {formatMessage(
              "Siguenos en nuestras redes sociales para disfrutar de una mejor experiencia"
            )}
          </p>
          <img src={twitter} alt="Twitter" />
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
        </section>

        <section className="footer-footer">
          <button>
            <Link to="/contact">{formatMessage("Contacto")}</Link>
          </button>
          <button>
            <Link to="/about-us">{formatMessage("Sobre nosotros")}</Link>
          </button>
          <button>
            <Link to="terms-conditions">
              {formatMessage("Términos y condiciones")}
            </Link>
          </button>
        </section>
      </footer>
    </React.Fragment>
  );
}

export { Footer };

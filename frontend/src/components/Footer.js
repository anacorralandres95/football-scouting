import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo-ChampionsWhite.png";
import twitter from "../assets/icons/twitter.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";


function Footer () {
    return (
        <React.Fragment>
            <footer>
            <section className="logo">
                <img src={ logo } alt="Logo" />
            </section>
      
            <section className="contact-footer">
                <h2>CONTACTO</h2>
                <p>Av. Linares Rivas, 50, 51, 15005 A Coruña</p>
                <p>+34 587 348 428</p>
                <p>info@champions.com</p>
            </section>
  
            <section className="follow-footer">
                <h2>SÍGUENOS</h2>
                <p>Siguenos en nuestras redes sociales <br></br> para disfrutar de una mejor experiencia</p>
                <img src={twitter} alt="Twitter"/>
                <img src={facebook} alt="Facebook"/>
                <img src={instagram} alt="Instagram"/>
            </section>
  
            <section className="footer-footer">
                <button>
                    <Link to="/contact">CONTACTO</Link>
                </button>
                <button>
                    <Link to="/about-us">SOBRE NOSOTROS</Link>
                </button>
                <button>
                    <Link to="terms-conditions">TÉRMINOS Y CONDICIONES</Link>
                </button>
            </section>
            </footer>
        </React.Fragment>
    )
}

export { Footer };
import React from "react";
import formatMessage from "format-message";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { Faqs } from "../../components/Faqs.js";
import "./terms-about-contact.css";
import illustration from "../../assets/img/about.svg";
import { useAuth } from "../../shared/context/auth-context.js";
import { HeaderUser } from "../../components/HeaderUser.js";

function AboutUs() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      {!user ? <Header /> : <HeaderUser />}
      <Faqs />

      <section className="target-t-a-c">
        <h1>{formatMessage("Sobre nosotros")}</h1>
        <section className="paragraphs">
          <h2>
            {formatMessage(
              "Nuestro objetivo es dar voz a las personas y poner el mundo a su alcance"
            )}
          </h2>
          <p>
            {formatMessage(
              "Creemos que todos debemos tener la oportunidad de expresarnos, y que el mundo es un lugar mejor cuando escuchamos a los demás, compartimos información y creamos una comunidad a través de nuestras historias."
            )}
          </p>
          <p>
            {formatMessage(
              "Nuestros valores se basan en cuatro libertades fundamentales que nos definen como personas."
            )}
          </p>
          <h2 className="p">{formatMessage("Libertad de expresión")}</h2>
          <p>
            {formatMessage(
              "Todas las personas deben tener derecho a hablar libremente, compartir sus opiniones y fomentar el diálogo abierto. Además, la libertad creativa genera nuevas voces, formatos y posibilidades."
            )}
          </p>
          <h2 className="p">{formatMessage("Libertad de información")}</h2>
          <p>
            {formatMessage(
              "Todas las personas deben tener la oportunidad de acceder a la información de forma libre y sin trabas. Los vídeos son una herramienta muy importante para educar, generar conocimiento y documentar los grandes y pequeños acontecimientos que tienen lugar en todo el mundo."
            )}
          </p>
          <h2 className="p">{formatMessage("Libertad de oportunidades")}</h2>
          <p>
            {
              "Todo el mundo debe tener la oportunidad de darse a conocer, crear un negocio y triunfar en lo que le gusta. Sin intermediarios; son las personas quienes tienen que decidir lo que es popular."
            }
          </p>
          <h2 className="p">{formatMessage("Libertad de integración")}</h2>
          <p>
            {formatMessage(
              "Todas las personas deben tener la oportunidad de encontrar comunidades de apoyo, romper las barreras, traspasar las fronteras, y reunirse para disfrutar de sus intereses y gustos comunes."
            )}
          </p>
          <img src={illustration} alt="" />
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { AboutUs };

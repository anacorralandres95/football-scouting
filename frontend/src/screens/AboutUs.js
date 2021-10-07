import React from "react";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/terms-about-contact.css";
import illustration from "../assets/img/about.svg";

function AboutUs() {
  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-t-a-c">
        <h1>SOBRE NOSOTROS</h1>
        <section className="paragraphs">
          <h2>
            NUESTRO OBJETIVO ES DAR VOZ A LAS PERSONAS Y PONER EL MUNDO A SU
            ALCANCE
          </h2>
          <p>
            Creemos que todos debemos tener la oportunidad de expresarnos, y que
            el mundo es un lugar mejor cuando escuchamos a los demás,
            compartimos información y creamos una comunidad a través de nuestras
            historias.
          </p>
          <p>
            Nuestros valores se basan en cuatro libertades fundamentales que nos
            definen como personas.
          </p>
          <h2 className="p">LIBERTAD DE EXPRESIÓN</h2>
          <p>
            Todas las personas deben tener derecho a hablar libremente,
            compartir sus opiniones y fomentar el diálogo abierto. Además, la
            libertad creativa genera nuevas voces, formatos y posibilidades.
          </p>
          <h2 className="p">LIBERTAD DE INFORMACIÓN</h2>
          <p>
            Todas las personas deben tener la oportunidad de acceder a la
            información de forma libre y sin trabas. Los vídeos son una
            herramienta muy importante para educar, generar conocimiento y
            documentar los grandes y pequeños acontecimientos que tienen lugar
            en todo el mundo.
          </p>
          <h2 className="p">LIBERTAD DE OPORTUNIDADES</h2>
          <p>
            Todo el mundo debe tener la oportunidad de darse a conocer, crear un
            negocio y triunfar en lo que le gusta. Sin intermediarios; son las
            personas quienes tienen que decidir lo que es popular.
          </p>
          <h2 className="p">LIBERTAD DE INTEGRACIÓN</h2>
          <p>
            Todas las personas deben tener la oportunidad de encontrar
            comunidades de apoyo, romper las barreras, traspasar las fronteras,
            y reunirse para disfrutar de sus intereses y gustos comunes.
          </p>
          <img src={illustration} alt="" />
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { AboutUs };

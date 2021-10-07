import React from "react";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/terms-about-contact.css";
import illustration from "../assets/img/contact.svg";

function Contact() {
  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section class="target-t-a-c">
        <h1>CONTACTO</h1>
        <section class="paragraphs">
          <h2>DIRECCIÓN</h2>
          <p>Av. Linares Rivas, 50-51, 15005 A Coruña</p>
          <h2 class="p">TELÉFONO</h2>
          <p>+34 587 348 428</p>
          <h2 class="p">CORREO ELECTRÓNICO</h2>
          <p>info@champions.com</p>
          <button id="send-email">
            <a href="mailto:anacorralandres@ied.edu">
              ENVIAR CORREO ELECTRÓNICO
            </a>
          </button>
          <img src={illustration} alt="" />
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { Contact };

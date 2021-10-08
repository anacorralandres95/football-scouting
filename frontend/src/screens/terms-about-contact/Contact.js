import React from "react";
import formatMessage from "format-message";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { Faqs } from "../../components/Faqs.js";
import "./terms-about-contact.css";
import illustration from "../../assets/img/contact.svg";
import { useAuth } from "../../shared/context/auth-context.js";
import { HeaderUser } from "../../components/HeaderUser.js";

function Contact() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      {!user ? <Header /> : <HeaderUser></HeaderUser>}
      <Faqs />

      <section class="target-t-a-c">
        <h1>{formatMessage("Contacto")}</h1>
        <section class="paragraphs">
          <h2>{formatMessage("Dirección")}</h2>
          <p>{formatMessage("Av. Linares Rivas, 50-51, 15005 A Coruña")}</p>
          <h2 class="p">{formatMessage("Teléfono")}</h2>
          <p>{formatMessage("+34 587 348 428")}</p>
          <h2 class="p">{formatMessage("Correo electrónico")}</h2>
          <p>{formatMessage("info@champions.com")}</p>
          <button id="send-email">
            <a href="mailto:anacorralandres@ied.edu">
              {formatMessage("Enviar correo electrónico")}
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

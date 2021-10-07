import React from "react";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/terms-about-contact.css";
import illustration from "../assets/img/terms.svg";

function TermsConditions() {
  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-t-a-c">
        <h1>TÉRMINOS Y CONDICIONES</h1>

        <section className="paragraphs">
          <h2>AL UTILIZAR NUESTROS SERVICIOS, NOS CONFÍAS TUS DATOS</h2>
          <p>
            Entendemos que es una gran responsabilidad y nos esforzamos al
            máximo para proteger tu información y permitirte controlarla. El
            objetivo de esta Política de Privacidad es informarte sobre qué
            datos recogemos, por qué los recogemos y cómo puedes actualizarlos,
            gestionarlos, exportarlos y eliminarlos.
          </p>
          <p>
            Recogemos información para proporcionar los mejores servicios a
            todos nuestros usuarios: desde determinar información básica, como
            el idioma que hablas, hasta datos más complejos, como los anuncios
            que te resultarán más útiles, las personas que más te interesan
            online o los vídeos de Champions que te pueden gustar. El tipo de
            información que recoge la plataforma y cómo se utiliza esa
            información depende del uso que hagas de nuestros servicios y de
            cómo administres los controles de privacidad.
          </p>
          <p>
            Si no has iniciado sesión en una cuenta de Champions, almacenamos la
            información que recogemos con identificadores únicos vinculados al
            navegador, la aplicación o el dispositivo que utilices. Esto nos
            permite, por ejemplo, mantener tus preferencias de idioma en todas
            las sesiones de navegación.
          </p>
          <h2 className="p">INFORMACIÓN QUE CREAS O NOS PROPORCIONAS</h2>
          <p>
            Al crear una cuenta de Champions, nos proporcionas información
            personal que incluye tu nombre y una contraseña. También puedes
            añadir un número de teléfono o datos de pago a tu cuenta. Aunque no
            hayas iniciado sesión en una cuenta de Champions, también puedes
            proporcionarnos información como, por ejemplo, una dirección de
            correo electrónico para recibir actualizaciones sobre nuestros
            servicios.
          </p>
          <p>
            También recogemos el contenido que creas, subes o recibes de otros
            usuarios cuando utilizas nuestros servicios. Entre estos datos se
            incluyen los correos electrónicos que escribes y recibes, los vídeos
            que guardas y los comentarios que publicas en los vídeos de
            Champions.
          </p>
          <h2 className="p">TU ACTIVIDAD</h2>
          <p>
            Recogemos información sobre tu actividad en nuestros servicios, que
            utilizamos para realizar acciones como recomendarte vídeos de
            Champions que pueden gustarte. A continuación, te indicamos la
            información de actividad que podemos recoger:
          </p>
          <ul>
            <li>Los términos que buscas</li>
            <li>Los vídeos que ves</li>
            <li>
              Las visualizaciones y las interacciones con el contenido y los
              anuncios
            </li>
            <li>Usuarios con los que te comunicas o compartes contenido</li>
            <li>
              Actividad en sitios web y aplicaciones de terceros que utilizan
              nuestros servicios
            </li>
          </ul>
          <p>
            Puedes acceder a tu cuenta de Champions para buscar y gestionar la
            información de actividad que está guardada en ella.
          </p>
          <img src={illustration} alt="" />
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { TermsConditions };

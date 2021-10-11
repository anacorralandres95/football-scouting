import React from "react";
import formatMessage from "format-message";
import { Header } from "../../components/headers/Header.js";
import { HeaderUser } from "../../components/headers/HeaderUser.js";
import { Footer } from "../../components/footer/Footer.js";
import { Faqs } from "../../components/faqs/Faqs.js";
import illustration from "../../assets/img/terms.svg";
import { useAuth } from "../../shared/context/auth-context.js";
import "./terms-about-contact.css";

function TermsConditions() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      {!user ? <Header /> : <HeaderUser />}
      <Faqs />

      <section className="target-t-a-c">
        <h1>{formatMessage("Términos y condiciones")}</h1>

        <section className="paragraphs">
          <h2>
            {formatMessage(
              "Al utilizar nuestros servicios, nos confías tus datos"
            )}
          </h2>
          <p>
            {formatMessage(
              " Entendemos que es una gran responsabilidad y nos esforzamos al máximo para proteger tu información y permitirte controlarla. El objetivo de esta Política de Privacidad es informarte sobre qué datos recogemos, por qué los recogemos y cómo puedes actualizarlos, gestionarlos, exportarlos y eliminarlos."
            )}
          </p>
          <p>
            {formatMessage(
              "Recogemos información para proporcionar los mejores servicios a todos nuestros usuarios: desde determinar información básica, como el idioma que hablas, hasta datos más complejos, como los anuncios que te resultarán más útiles, las personas que más te interesan online o los vídeos de Champions que te pueden gustar. El tipo de información que recoge la plataforma y cómo se utiliza esa información depende del uso que hagas de nuestros servicios y de cómo administres los controles de privacidad."
            )}
          </p>
          <p>
            {formatMessage(
              "Si no has iniciado sesión en una cuenta de Champions, almacenamos la información que recogemos con identificadores únicos vinculados al navegador, la aplicación o el dispositivo que utilices. Esto nos permite, por ejemplo, mantener tus preferencias de idioma en todas slas sesiones de navegación."
            )}
          </p>
          <h2>{formatMessage("Información que creas o nos proporcionas")}</h2>
          <p>
            {formatMessage(
              "Al crear una cuenta de Champions, nos proporcionas información personal que incluye tu nombre y una contraseña. También puedes añadir un número de teléfono o datos de pago a tu cuenta. Aunque no hayas iniciado sesión en una cuenta de Champions, también puedes proporcionarnos información como, por ejemplo, una dirección de correo electrónico para recibir actualizaciones sobre nuestros servicios."
            )}
          </p>
          <p>
            {formatMessage(
              "También recogemos el contenido que creas, subes o recibes de otros usuarios cuando utilizas nuestros servicios. Entre estos datos se incluyen los correos electrónicos que escribes y recibes, los vídeos que guardas y los comentarios que publicas en los vídeos de Champions."
            )}
          </p>
          <h2 className="p">{formatMessage("Tu actividad")}</h2>
          <p>
            {formatMessage(
              "Recogemos información sobre tu actividad en nuestros servicios, que utilizamos para realizar acciones como recomendarte vídeos de Champions que pueden gustarte. A continuación, te indicamos la información de actividad que podemos recoger:"
            )}
          </p>
          <ul>
            <li>{formatMessage("Los términos que buscas")}</li>
            <li>{formatMessage("Los vídeos que ves")}</li>
            <li>
              {formatMessage(
                " Las visualizaciones y las interacciones con el contenido y los anuncios"
              )}
            </li>
            <li>
              {formatMessage(
                "Usuarios con los que te comunicas o compartes contenido"
              )}
            </li>
            <li>
              {formatMessage(
                "Actividad en sitios web y aplicaciones de terceros que utilizan nuestros servicios"
              )}
            </li>
          </ul>
          <p>
            {formatMessage(
              "Puedes acceder a tu cuenta de Champions para buscar y gestionar la información de actividad que está guardada en ella."
            )}
          </p>
          <img src={illustration} alt="" />
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { TermsConditions };

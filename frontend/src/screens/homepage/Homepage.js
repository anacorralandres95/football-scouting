import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import video from "../../assets/video/346.mp4";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { Faqs } from "../../components/Faqs.js";
import arrow from "../../assets/icons/arrow-down.png";
import "./homepage.css";

function Homepage() {
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const roles = [
    {
      title: formatMessage("Promesa de fútbol"),
      price: formatMessage("0 €"),
      plans: [
        formatMessage("Subir vídeos"),
        formatMessage("Visualizar vídeos"),
        formatMessage("Comentar y puntuar"),
        formatMessage("Recibir mensajes del ojeador"),
      ],
      link: "/promise-register",
      className: "homepage-father",
    },
    {
      title: formatMessage("Ojeador"),
      price: formatMessage("10 €"),
      plans: [
        formatMessage("Visualizar vídeos"),
        formatMessage("Comentar y puntuar"),
        formatMessage("Contactar con la promesa"),
      ],
      link: "/scout-register",
      className: "homepage-scout",
    },
    {
      title: formatMessage("Asistente"),
      price: formatMessage("0 €"),
      plans: [
        formatMessage("Visualizar vídeos"),
        formatMessage("Comentar y puntuar"),
      ],
      link: "/assistant-register",
      className: "homepage-assistant",
    },
  ];

  return (
    <>
      <Header />
      <Faqs />

      <section className="video" style={{ height: height }}>
        <video loop autoPlay muted id="video_background">
          <source src={video} type="video/mp4" />
        </video>

        <section className="video-title">
          <h1>{formatMessage("Champions.")}</h1>
          <p>
            {formatMessage(
              "¿Quieres llevar a lo alto a tu hijo como una promesa del fútbol? En Champions ponemos a tu disposición una plataforma donde darle la visualización que se merece. También podrás como ojeador contactar con ellos o simplemente visualizar los vídeos si eres un amante del fútbol como nosotros."
            )}
          </p>
        </section>

        <div className="arrow">
          <small>{formatMessage("Descubre nuestro mundo")}</small>
          <img src={arrow} alt="arrow-down" />
        </div>
      </section>

      <section className="target">
        <section className="description">
          <h1>{formatMessage("¿Cómo desea continuar?")}</h1>
        </section>

        {roles.map((role) => {
          return (
            <section className={`card ${role.className}`}>
              <img src="" alt="" />
              <h1>{role.title}</h1>
              <h2>{role.price}</h2>
              {role.plans.map((plan) => {
                return <p>{plan}</p>;
              })}
              <button id="enter-father">
                <Link to={role.link}>{formatMessage("Registrarse")}</Link>
              </button>
            </section>
          );
        })}

        <section className="account">
          <Link to="/login">{formatMessage("Ya tengo una cuenta")}</Link>
        </section>
      </section>
      <Footer />
    </>
  );
}

export { Homepage };

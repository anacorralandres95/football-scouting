import React from "react";
import { Link } from "react-router-dom";
import "../css/homepage.css";
import video  from "../assets/video/346.mp4";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import arrow from "../assets/icons/arrow-down.png";

function Homepage () {
    return (
        <React.Fragment>
        <Header />
        <Faqs />

        <section className="video">
            <video loop autoPlay muted id="video_background">
            <source src={ video } type="video/mp4" />
            </video>

            <h1>Champions.</h1>
            <p>¿Quieres llevar a lo alto a tu hijo como una promesa del fútbol? <br></br> En Champions ponemos a tu disposición una plataforma donde <br></br> darle la visualización que se merece.<br></br>
                También podrás como ojeador contactar con ellos o simplemente <br></br> visualizar los vídeos si eres un amante del fútbol como nosotros.</p>

            <div className="arrow">
            <small>DESCUBRE NUESTRO MUNDO</small>
            <img src={arrow} alt="arrow-down" />
            </div>
 
        </section>
        

        <section className="target">
            <section className="description">
                 <h1>¿CÓMO DESEA CONTINUAR?</h1>
            </section>

            <section className="homepage-father">
                <img src="" alt="" />
                <h1>PROMESA DE FÚTBOL</h1>
                 <h2>0 €</h2>
                <p>Subir vídeos</p>
                <p>Visualizar vídeos</p>
                <p>Comentar y puntuar</p>
                <p>Recibir mensajes del ojeador</p>
                <button id="enter-father">
                    <Link to="/promise-register">REGISTRARSE</Link>
                </button>
            </section>

            <section className="homepage-scout">
                <img src="" alt="" />
                <h1>OJEADOR</h1>
                <h2>10 €</h2>
                <p>Visualizar vídeos</p>
                <p>Comentar y Puntuar</p>
                <p>Contactar con la promesa</p>
                <button id="enter-scout">
                    <Link to="/scout-register">REGISTRARSE</Link>
                </button>
            </section>

            <section className="homepage-assistant">
                <img src="" alt="" />
                <h1>ASISTENTE</h1>
                <h2>0 €</h2>
                <p>Ver los vídeos</p>
                <p>Comentar y puntuar</p>
                <button className="enter-assistant">
                    <Link to="/assistant-register">REGISTRARSE</Link>
                </button>
            </section>

            <section className="account">
                <Link to="/login">Ya tengo una cuenta</Link>
            </section>
        </section>
        <Footer />
        </React.Fragment>
        
    )
}

export { Homepage }
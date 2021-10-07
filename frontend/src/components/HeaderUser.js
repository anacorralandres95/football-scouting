import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
import "../css/header-footer.css";
import logo from "../assets/img/Logo-ChampionsW.png";
import videoUpload from "../assets/icons/video.png";
import notification from "../assets/icons/notifications.png";

function HeaderUser() {
  const { logOut, user } = useAuth();

  return (
    <React.Fragment>
      <header>
        <section class="logo">
          <Link to="/dashboard">
            <img src={logo} alt="Logo" />
          </Link>
        </section>

        <p id="aviso">Sólo disponible en versión Desktop</p>

        <nav class="menu-nav2">
          <ul>
            {user.user_type === "Padre" && (
              <li class="nav">
                <button id="header-video">
                  <img src={videoUpload} alt="" />
                  <Link to="/video-upload">SUBIR VÍDEO</Link>
                </button>
              </li>
            )}

            <li class="nav">
              <button id="header-notifications">
                <img src={notification} alt="" />
                <a>NOTIFICACIONES</a>
              </button>
            </li>

            <li class="nav">
              <button id="header-profile">
                <a>HOLA {user.user_name} </a>
              </button>
            </li>

            <li class="login-nav">
              <button id="header-profile" onClick={logOut}>
                <a>SALIR</a>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { HeaderUser };

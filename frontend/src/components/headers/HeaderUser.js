import React from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import { useAuth } from "../../shared/context/auth-context";
import logo from "../../assets/img/Logo-ChampionsW.png";
import videoUpload from "../../assets/icons/video.png";
import notification from "../../assets/icons/notifications.png";
import "./header.css";

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

        <p id="aviso">{formatMessage("Sólo disponible en versión Desktop")}</p>

        <nav class="menu-nav2">
          <ul>
            {user?.user_type === "Padre" && (
              <li class="nav">
                <button id="header-video">
                  <img src={videoUpload} alt="" />
                  <Link to="/video-upload">{formatMessage("Subir vídeo")}</Link>
                </button>
              </li>
            )}

            <li class="nav">
              <button id="header-notifications">
                <img src={notification} alt="" />
                <p>{formatMessage("Notificaciones")}</p>
              </button>
            </li>

            <li class="nav">
              <button id="header-profile">
                <p>{`${formatMessage("Hola")} ${user?.user_name}`} </p>
              </button>
            </li>

            <li class="login-nav">
              <button id="header-profile" onClick={logOut}>
                <p>{formatMessage("Salir")}</p>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { HeaderUser };

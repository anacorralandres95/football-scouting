import React from "react";
import formatMessage from "format-message";
import { createVideoPromise } from "../../http/VideosService.js";
import { HeaderUser } from "../../components/headers/HeaderUser.js";
import { useHistory } from "react-router-dom";
import { Faqs } from "../../components/faqs/Faqs.js";
import upload from "../../assets/img/upload-video.png";
import { Button } from "../../components/button/Button";
import "./video-upload.css";

function VideoUpload() {
  const history = useHistory();

  const handleVideoUpload = (e) => {
    e.preventDefault();

    setTimeout(function createVideo() {
      const formVideo = document.getElementById("form-video");
      const formData = new FormData(formVideo);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      history.push("/video/my-videos");
      return createVideoPromise(formData, config);
    }, 1000);
  };

  return (
    <React.Fragment>
      <HeaderUser />
      <Faqs />

      <section class="target-upload">
        <h1>{formatMessage("Sube tu vídeo a la plataforma")}</h1>

        <form onSubmit={handleVideoUpload} id="form-video">
          <img src={upload} alt="upload-video" id="img-upload" />

          <section class="upload">
            <input type="file" name="video_url" id="upload-video" />

            <label for="title">{formatMessage("Título")}</label>
            <input type="text" name="title" />
            <label for="description">{formatMessage("Descripción")}</label>
            <textarea
              name="description"
              id="video-description"
              cols="30"
              rows="10"
            />

            <Button title={formatMessage("Subir vídeo")} />
            <span id="upload-meta">
              {formatMessage(
                "El formato debe de ser mp4 y el tamaño no debe superar los 10MB"
              )}
              <br />
              {formatMessage(
                "El vídeo sólo se subirá si tienes todos los campos cubiertos"
              )}
              <br />
              {formatMessage(" Este proceso tardará unos minutos")} <br />{" "}
              {formatMessage(
                "Te redireccionamos a tus vídeos donde lo encontrarás una vez el proceso termine"
              )}
            </span>
          </section>
        </form>
      </section>
    </React.Fragment>
  );
}

export { VideoUpload };

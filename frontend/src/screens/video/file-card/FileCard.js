import React from "react";
import formatMessage from "format-message";
import "./file-card.css";

function FileCard({ initialVideo }) {
  return (
    <>
      <section id="file-card-video">
        <img src={initialVideo.avatar_url} alt="" />
        <h1>{formatMessage("Ficha técnica")}</h1>

        <section class="file-card-video">
          <p>{formatMessage("Nombre y apellido")}</p>
          <span>
            {initialVideo.name} {initialVideo.surname1} {initialVideo.surname2}
          </span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Sexo")}</p>
          <span>{initialVideo.gender}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Comunidad autónoma")}</p>
          <span>{initialVideo.comunity}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Provincia")}</p>
          <span>{initialVideo.province}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Altura")}</p>
          <span>{`${initialVideo.height} cm`}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Peso")}</p>
          <span>{`${initialVideo.weight} kg`}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Equipo actual")}</p>
          <span>{initialVideo.team}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Demarcación")}</p>
          <span>{initialVideo.demarcation}</span>
        </section>

        <section class="file-card-video">
          <p>{formatMessage("Mejor pierna")}</p>
          <span>{initialVideo.best_leg}</span>
        </section>
      </section>
    </>
  );
}

export { FileCard };

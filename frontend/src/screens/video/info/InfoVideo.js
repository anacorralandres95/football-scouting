import React from "react";
import formatMessage from "format-message";
import "./info-video.css";

function InfoVideo({ initialVideo, addFavoriteClick, deleteFavoriteClick }) {
  return (
    <>
      <section class="data-video">
        <section id="data-video">
          <span href="" id="title-video">
            {initialVideo.title}
          </span>
          <span href="" id="description-video">
            {initialVideo.description}
          </span>
        </section>

        <section id="share-video">
          <button id="favorite" onClick={addFavoriteClick}>
            <p>{formatMessage("Añadir como favorito")}</p>
          </button>

          <button id="delete-favorite" onClick={deleteFavoriteClick}>
            <p>{formatMessage("Eliminar como favorito")}</p>
          </button>
        </section>
      </section>
    </>
  );
}

export { InfoVideo };

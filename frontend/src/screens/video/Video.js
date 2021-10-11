import React from "react";
import StarRatingComponent from "react-star-rating-component";
import formatMessage from "format-message";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RelatedVideos } from "../../components/related-videos/RelatedVideos";
import { Comments } from "./comments/Comments";
import { Faqs } from "../../components/faqs/Faqs.js";
import { HeaderUser } from "../../components/headers/HeaderUser.js";
import { useAuth } from "../../shared/context/auth-context";
import { useVideo } from "./useVideo";
import "./video.css";
import { InfoVideo } from "./info/InfoVideo";
import { FileCard } from "./file-card/FileCard";

function Video() {
  const { user } = useAuth();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const {
    rate,
    rating,
    initialVideo,
    addFavoriteClick,
    deleteFavoriteClick,
    deleteVideoClick,
    handleAddComment,
    handleAddRating,
  } = useVideo(params, setError);

  const contactEmail = `mailto: ${initialVideo.email}`;

  return (
    <>
      <HeaderUser />
      <Faqs />

      <section class="target-video">
        <section class="target-video1">
          <section id="video">
            <video src={initialVideo.video_url} poster="" controls></video>

            <InfoVideo
              initialVideo={initialVideo}
              addFavoriteClick={addFavoriteClick}
              deleteFavoriteClick={deleteFavoriteClick}
            />

            <section id="comment-in-video">
              {user?.user_type === "Ojeador" && (
                <button className="contacta">
                  <a href={contactEmail}>{formatMessage("Enviar mensaje")}</a>
                </button>
              )}

              {user && user?.user_id === initialVideo.user_id && (
                <button className="delete-video" onClick={deleteVideoClick}>
                  <p>{formatMessage("Eliminar vídeo")}</p>
                </button>
              )}

              <h1>{formatMessage("Escribe un comentario")}</h1>

              <form onSubmit={handleSubmit(handleAddComment)}>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  placeholder="Escribe tu comentario"
                  {...register("content", {
                    required: "The content is required",
                  })}
                />

                <span className="errorMessage">
                  {errors.content && errors.content.message}
                </span>

                <button>
                  <p>{formatMessage("Enviar")}</p>
                </button>
              </form>
            </section>

            <Comments />
          </section>
        </section>

        <section class="target-video2">
          <FileCard initialVideo={initialVideo} />

          <section id="average-rating">
            <section class="rate">
              <label class="globalpuntuation">
                {formatMessage("Puntuación global")}
              </label>
              <p id="finalrate">{rate}</p>

              <label class="globalpuntuation">
                {formatMessage("Puntua a la promesa")}
              </label>
              <span id="date-meta" style={{ fontSize: 10 }}>
                {formatMessage(
                  "Haz doble click para que la valoración se envíe correctamente"
                )}
              </span>

              <form>
                <section class="star-video">
                  <div style={{ fontSize: 24 }}>
                    <StarRatingComponent
                      name="rating"
                      id="rating"
                      starCount={5}
                      value={rating}
                      onStarClick={handleAddRating}
                      emptyStarColor="orange"
                    />
                  </div>
                </section>
              </form>
            </section>

            <section id="more-videos">
              <h1 id="name-related">{`${formatMessage("Todos los vídeos de")} ${
                initialVideo.name
              }`}</h1>

              <RelatedVideos />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export { Video };

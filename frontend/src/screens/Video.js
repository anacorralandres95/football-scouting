import React, { useReducer, useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getVideo } from "../http/VideosService";
import { addFavorite } from "../http/VideosService";
import { deleteFavorite } from "../http/VideosService";
import { deleteVideo } from "../http/VideosService";
import { addComment } from "../http/VideosService";
import { RelatedVideos } from "../components/RelatedVideos";
import { Comments } from "../components/Comments";
import { addRating } from "../http/VideosService";
import { getRating } from "../http/VideosService";
import { Faqs } from "../components/Faqs.js";
import { HeaderUser } from "../components/HeaderUser.js";
import { useAuth } from "../shared/context/auth-context";
import "../css/video.css";

function VideoReducer(state, action) {
  switch (action.type) {
    case "GET_VIDEO_SUCCESS":
      return { ...state, video: action.initialVideo };

    default:
      return state;
  }
}

function Video() {
  const { user } = useAuth();

  const params = useParams();

  const [state, dispatch] = useReducer(VideoReducer, {
    video: [],
  });

  useEffect(() => {
    getVideo(params.video_id).then((response) => {
      dispatch({
        type: "GET_VIDEO_SUCCESS",
        initialVideo: response.data.data,
      });
    });
  }, []);

  const [rate, setRate] = useState();

  useEffect(() => {
    getRating(params.video_id).then((response) => {
      const ratingData = response.data.data.rating;
      const rate = Math.round(ratingData * 100) / 100;
      setRate(rate);
    });
  });

  const initialVideo = state.video;

  const addFavoriteClick = async () => {
    try {
      await addFavorite(params.video_id);
      window.alert("Vídeo añadido a tus favoritos");
    } catch (e) {
      window.alert("Este vídeo ya está en tu lista de favoritos");
    }
  };

  const deleteFavoriteClick = async () => {
    try {
      await deleteFavorite(params.video_id);
      window.alert("Vídeo no añadido en tu lista de favoritos");
    } catch (e) {
      window.alert("Este vídeo ha sido eliminado de tu lista de favoritos");
    }
  };

  const deleteVideoClick = async () => {
    const a = window.confirm("¿Estás seguro que quieres eliminar el vídeo?");
    if (a === true) {
      await deleteVideo(params.video_id);
      window.alert(
        "Vídeo eliminado, haz click en el logo para su completa confirmación."
      );
    } else {
      window.alert("Eliminación de vídeo cancelada");
    }
  };

  const { register, errors, handleSubmit, setError } = useForm({
    mode: "onBlur",
  });

  const addCommentClick = async (content) => {
    await addComment(params.video_id, content);
  };

  const handleAddComment = (formData) => {
    return addCommentClick(formData)
      .catch((error) => {
        if (error.response.status === 409) {
          setError("content", "conflict", "The content can't be empty");
        }
      })
      .then(window.location.reload());
  };

  const [rating, setRating] = useState(0);

  const addRatingClick = async (nextValue) => {
    setRating({ rating: nextValue });
    await addRating(params.video_id, rating);
  };

  const handleAddRating = (formData) => {
    return addRatingClick(formData).then(
      window.alert("Tu valoración ha sido enviada")
    );
  };

  var contactEmail = `mailto: ${initialVideo.email}`;

  return (
    <React.Fragment>
      <HeaderUser />
      <Faqs />

      <section class="target-video">
        <section class="target-video1">
          <section id="video">
            <video src={initialVideo.video_url} poster="" controls></video>

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
                <p>Compartir en</p>
                <button
                  id="share"
                  onClick={() => window.alert("Función aún no disponible")}
                >
                  <a href="">Twitter</a>
                </button>
                <button
                  id="share"
                  onClick={() => window.alert("Función aún no disponible")}
                >
                  <a href="">Facebook</a>
                </button>
                <button
                  id="share"
                  onClick={() => window.alert("Función aún no disponible")}
                >
                  <a href="">Instagram</a>
                </button>

                <button id="favorite" onClick={addFavoriteClick}>
                  <a>AÑADIR COMO FAVORITO</a>
                </button>

                <button id="delete-favorite" onClick={deleteFavoriteClick}>
                  <a>ELIMINAR COMO FAVORITO</a>
                </button>
              </section>
            </section>

            <section id="comment-in-video">
              {user.user_type === "Ojeador" && (
                <button className="contacta">
                  <a href={contactEmail}>ENVIAR UN MENSAJE</a>
                </button>
              )}

              {user.user_id === initialVideo.user_id && (
                <button className="delete-video" onClick={deleteVideoClick}>
                  <a>ELIMINAR VÍDEO</a>
                </button>
              )}

              <h1>ESCRIBE UN COMENTARIO</h1>

              <form onSubmit={handleSubmit(handleAddComment)}>
                <textarea
                  ref={register({
                    required: "The content is required",
                  })}
                  type="text"
                  name="content"
                  id="content"
                  placeholder="Escribe tu comentario"
                ></textarea>

                <span className="errorMessage">
                  {errors.content && errors.content.message}
                </span>

                <button>
                  <a>ENVIAR</a>
                </button>
              </form>
            </section>

            <Comments />
          </section>
        </section>

        <section class="target-video2">
          <section id="file-card-video">
            <img src={initialVideo.avatar_url} alt="" />
            <h1>FICHA TÉCNICA</h1>

            <section class="file-card-video">
              <p>NOMBRE Y APELLIDO</p>
              <span>
                {initialVideo.name} {initialVideo.surname1}{" "}
                {initialVideo.surname2}
              </span>
            </section>

            <section class="file-card-video">
              <p>SEXO</p>
              <span>{initialVideo.gender}</span>
            </section>

            <section class="file-card-video">
              <p>COMUNIDAD AUTÓNOMA</p>
              <span>{initialVideo.comunity}</span>
            </section>

            <section class="file-card-video">
              <p>PROVINCIA</p>
              <span>{initialVideo.province}</span>
            </section>

            <section class="file-card-video">
              <p>ALTURA</p>
              <span>{initialVideo.height} cm</span>
            </section>

            <section class="file-card-video">
              <p>PESO</p>
              <span>{initialVideo.weight} kg</span>
            </section>

            <section class="file-card-video">
              <p>EQUIPO ACTUAL</p>
              <span>{initialVideo.team}</span>
            </section>

            <section class="file-card-video">
              <p>DEMARCACIÓN</p>
              <span>{initialVideo.demarcation}</span>
            </section>

            <section class="file-card-video">
              <p>MEJOR PIERNA</p>
              <span>{initialVideo.best_leg}</span>
            </section>
          </section>

          <section id="average-rating">
            <section class="rate">
              <label class="globalpuntuation">PUNTUACIÓN GLOBAL</label>
              <p id="finalrate">{rate}</p>

              <label class="globalpuntuation">PUNTUA A LA PROMESA</label>
              <span id="date-meta" style={{ fontSize: 10 }}>
                Haz doble click para que la valoración se envíe correctamente
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
              <h1 id="name-related">TODOS LOS VÍDEOS DE {initialVideo.name}</h1>

              <RelatedVideos />
            </section>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export { Video };

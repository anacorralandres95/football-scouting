import React, { useReducer, useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
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
import avatar from "../assets/icons/user.png";
import "../css/video.css";

function VideoReducer(state, action) {
  const history = useHistory();

  switch (action.type) {
    case "GET_VIDEO_SUCCESS":
      return { ...state, video: action.initialVideo };

    //   case "SELECT_VIDEO":
    //     return {
    //       ...state,
    //       selectedVideo: action.index
    //     };

    // case "TOGGLE_VIDEO":
    //     return {
    //       ...state,
    //       isVideoOpened: !state.isVideoOpened
    //     };

    default:
      return state;
  }
}

function Video({ match }) {
  const { user } = useAuth();

  const params = useParams();

  // const video_id = video_id.find(({video_id}) => video_id === match.params.video_id);

  const [state, dispatch] = useReducer(VideoReducer, {
    video: [],
    // selectedVideo: null
    // isChallengeOpened: false
  });

  useEffect(() => {
    getVideo(params.video_id).then((response) => {
      console.log(response);
      dispatch({
        type: "GET_VIDEO_SUCCESS",
        initialVideo: response.data.data,
      });
    });
  }, []);

  const [rate, setRate] = useState();

  useEffect(() => {
    getRating(params.video_id).then((response) => {
      console.log("Rating", response);
      let n = response.data.data.rating;
      const rate = Math.round(n * 100) / 100;
      setRate(rate);
    });
  });

  console.log("HOLAAAA", rate);

  // const selectVideo = selectedIndex => {
  //     dispatch({ type: "SELECT_VIDEO", index: selectedIndex });
  // };

  const initialVideo = state.video;
  console.log(initialVideo);

  // console.log(initialVideo.created_at)
  // var videoDate1 = initialVideo.created_at;

  // var videoDate = videoDate1.substring(0, 16).replace("T", " ");
  // console.log(videoDate)

  // var ages = initialVideo.date_birth;

  // console.log(ages);

  // var birthdate1 = initialVideo.date_birth;

  // var birthdate =birthdate1.substring(4, 20);

  // console.log(birthdate);

  const addFavoriteClick = async () => {
    console.log("CLICK");
    try {
      await addFavorite(params.video_id);
      window.alert("Vídeo añadido a tus favoritos");
    } catch (e) {
      window.alert("Este vídeo ya está en tu lista de favoritos");
    }
    // dispatch({ type: "CREATE_NOTE", note: response.data });
    // selectNote(0);
  };

  const deleteFavoriteClick = async () => {
    console.log("CLICK");
    try {
      await deleteFavorite(params.video_id);
      window.alert("Vídeo no añadido en tu lista de favoritos");
    } catch (e) {
      window.alert("Este vídeo ha sido eliminado de tu lista de favoritos");
    }
    // dispatch({ type: "CREATE_NOTE", note: response.data });
    // selectNote(0);
  };

  const deleteVideoClick = async () => {
    console.log("DELETE");
    // await deleteVideo(params.video_id);
    // dispatch({ type: "CREATE_NOTE", note: response.data });
    const a = window.confirm("¿Estás seguro que quieres eliminar el vídeo?");
    if (a === true) {
      await deleteVideo(params.video_id);
      window.alert(
        "Vídeo eliminado, haz click en el logo para su completa confirmación."
      );
      // history.back();
    } else {
      window.alert("Eliminación de vídeo cancelada");
    }
    // selectNote(0);
  };

  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: "onBlur",
  });

  const addCommentClick = async (content) => {
    console.log("CLICK");
    await addComment(params.video_id, content);
    // dispatch({ type: "CREATE_NOTE", note: response.data });
    // selectNote(0);
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

  // const ratingValue = e => {
  //     setRating({rating: e.target.value});
  // }

  // function onRatingClick(e) {
  //     setRating({rating: e.target.value});
  // }

  // console.log("RATE", rating);

  const [rating, setRating] = useState(0);

  const addRatingClick = async (nextValue) => {
    setRating({ rating: nextValue });
    console.log(rating);
    await addRating(params.video_id, rating);
  };

  const handleAddRating = (formData) => {
    console.log("FORM", formData);
    return addRatingClick(formData).then(
      window.alert("Tu valoración ha sido enviada")
    );
  };

  // const handleAddComment = (e, formData) => {
  //     e.preventDefault();
  //     return addCommentClick(formData);
  // };

  var contactEmail = `mailto: ${initialVideo.email}`;
  console.log(initialVideo.email);
  console.log(initialVideo);

  console.log("k", initialVideo.created_at);

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
                {/* <span href="" id="visualizations-video">{initialVideo.created_at}</span> */}
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

            {/* <section class="file-card-video">
                            <p>AÑO DE  NACIMIENTO</p>
                            <span>{birthdate}</span>
                            </section>   */}

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
                  {/* <input id="star5" type="radio" name="rating" value="5" onChange={ratingValue}/>
                                        <label for="star5">✹ </label>
                            
                                        <input id="star4" type="radio" name="rating" value="4" onChange={ratingValue} />
                                        <label for="star4">✹ </label>
                            
                                        <input id="star3" type="radio" name="rating" value="3"  onChange={ratingValue}/>
                                        <label for="star3">✹ </label>
                            
                                        <input id="star2" type="radio" name="rating" value="2"  onChange={ratingValue}/>
                                        <label for="star2">✹ </label>
                            
                                        <input id="star1" type="radio" name="rating" value="1"  onChange={ratingValue}/>
                                        <label for="star1">✹ </label>
                                    
                                        <input id="star0" type="radio" name="rating" value="0"  onChange={ratingValue}/>
                                        <label for="star0"></label> */}
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
                {/* 
                                        <button id="ratingbutton">
                                            <a>ENVIAR</a>
                                        </button> */}
              </form>
            </section>

            {/* <section id="rating">

                                    <section class="rate">
                                        <label class="globalpuntuation">VALORA A LA PROMESA</label>

                                        <label class="globalpuntuation2">FUERZA</label>
                            
                                        <section class="star-video">
                            
                                        <input id="star5" type="radio" name="rate" value="5" />
                                        <label for="star5">✹ </label>
                            
                                        <input id="star4" type="radio" name="rate" value="4" />
                                        <label for="star4">✹ </label>
                            
                                        <input id="star3" type="radio" name="rate" value="3" />
                                        <label for="star3">✹ </label>
                            
                                        <input id="star2" type="radio" name="rate" value="2" />
                                        <label for="star2">✹ </label>
                            
                                        <input id="star1" type="radio" name="rate" value="1" />
                                        <label for="star1">✹ </label>
                                    
                                        <input id="star0" type="radio" name="rate" value="0" />
                                        <label for="star0"></label>
                                        </section>
                                    </section>

                                    <section class="rate">

                                        <label class="globalpuntuation2">VELOCIDAD</label>
                            
                                        <section class="star-video">
                            
                                        <input id="star5" type="radio" name="rate" value="5" />
                                        <label for="star5">✹ </label>
                            
                                        <input id="star4" type="radio" name="rate" value="4" />
                                        <label for="star4">✹ </label>
                            
                                        <input id="star3" type="radio" name="rate" value="3" />
                                        <label for="star3">✹ </label>
                            
                                        <input id="star2" type="radio" name="rate" value="2" />
                                        <label for="star2">✹ </label>
                            
                                        <input id="star1" type="radio" name="rate" value="1" />
                                        <label for="star1">✹ </label>
                                    
                                        <input id="star0" type="radio" name="rate" value="0" />
                                        <label for="star0"></label>
                                        </section>
                                    </section>

                                    <section class="rate">

                                        <label class="globalpuntuation2">TÉCNICA</label>
                            
                                        <section class="star-video">
                            
                                        <input id="star5" type="radio" name="rate" value="5" />
                                        <label for="star5">✹ </label>
                            
                                        <input id="star4" type="radio" name="rate" value="4" />
                                        <label for="star4">✹ </label>
                            
                                        <input id="star3" type="radio" name="rate" value="3" />
                                        <label for="star3">✹ </label>
                            
                                        <input id="star2" type="radio" name="rate" value="2" />
                                        <label for="star2">✹ </label>
                            
                                        <input id="star1" type="radio" name="rate" value="1" />
                                        <label for="star1">✹ </label>
                                    
                                        <input id="star0" type="radio" name="rate" value="0" />
                                        <label for="star0"></label>
                                        </section>
                                    </section>


                                    <section class="rate">

                                        <label class="globalpuntuation2">GOLPE DE BALÓN</label>
                            
                                        <section class="star-video">
                            
                                        <input id="star5" type="radio" name="rate" value="5" />
                                        <label for="star5">✹ </label>
                            
                                        <input id="star4" type="radio" name="rate" value="4" />
                                        <label for="star4">✹ </label>
                            
                                        <input id="star3" type="radio" name="rate" value="3" />
                                        <label for="star3">✹ </label>
                            
                                        <input id="star2" type="radio" name="rate" value="2" />
                                        <label for="star2">✹ </label>
                            
                                        <input id="star1" type="radio" name="rate" value="1" />
                                        <label for="star1">✹ </label>
                                    
                                        <input id="star0" type="radio" name="rate" value="0" />
                                        <label for="star0"></label>
                                        </section>
                                    </section>

                                    <section class="rate">

                                        <label class="globalpuntuation2">PARADA</label>
                            
                                        <section class="star-video">
                            
                                        <input id="star5" type="radio" name="rate" value="5" />
                                        <label for="star5">✹ </label>
                            
                                        <input id="star4" type="radio" name="rate" value="4" />
                                        <label for="star4">✹ </label>
                            
                                        <input id="star3" type="radio" name="rate" value="3" />
                                        <label for="star3">✹ </label>
                            
                                        <input id="star2" type="radio" name="rate" value="2" />
                                        <label for="star2">✹ </label>
                            
                                        <input id="star1" type="radio" name="rate" value="1" />
                                        <label for="star1">✹ </label>
                                    
                                        <input id="star0" type="radio" name="rate" value="0" />
                                        <label for="star0"></label>
                                        </section> 
                                    </section> 
           

                                </section> */}

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

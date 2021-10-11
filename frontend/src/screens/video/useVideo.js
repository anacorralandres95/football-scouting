import { useReducer, useEffect, useState } from "react";
import {
  getVideo,
  addFavorite,
  deleteFavorite,
  deleteVideo,
  addComment,
  addRating,
  getRating,
} from "../../http/VideosService";
import { VideoReducer } from "../../reducers/VideoReducer";

export const useVideo = (params, setError) => {
  const [rate, setRate] = useState();
  const [rating, setRating] = useState(0);

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

  const addRatingClick = async (nextValue) => {
    setRating({ rating: nextValue });
    await addRating(params.video_id, rating);
  };

  const handleAddRating = (formData) => {
    return addRatingClick(formData).then(
      window.alert("Tu valoración ha sido enviada")
    );
  };

  return {
    rate,
    rating,
    initialVideo,
    addFavoriteClick,
    deleteFavoriteClick,
    deleteVideoClick,
    handleAddComment,
    handleAddRating,
  };
};

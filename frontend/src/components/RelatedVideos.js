import React, { useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getRelatedVideos } from "../http/VideosService";
import { useParams } from "react-router-dom";

function RelatedReducer(state, action) {
  switch (action.type) {
    case "GET_RELATED_SUCCESS":
      return { ...state, related: action.initialRelated };

    case "SELECT_RELATED":
      return {
        ...state,
        selectedRelated: action.index,
      };

    default:
      return state;
  }
}

function RelatedVideos() {
  const history = useHistory();
  const params = useParams();

  const [state, dispatch] = useReducer(RelatedReducer, {
    related: [],
    selectedRelated: null,
  });

  useEffect(() => {
    getRelatedVideos(params.video_id).then((response) => {
      dispatch({
        type: "GET_RELATED_SUCCESS",
        initialRelated: response.data.data,
      });
    });
  }, []);

  const selectRelated = (selectedIndex) => {
    dispatch({ type: "SELECT_RELATED", index: selectedIndex });
  };

  return (
    <React.Fragment>
      <ul>
        {state.related.map((Related, i) => (
          <li
            className="video-player-related"
            key={Related.video_id}
            onClick={() => {
              selectRelated(state.related[i]);
              history.push(`/video/${Related.video_id}`);
              window.location.reload();
            }}
          >
            <video src={Related.video_url} />

            <span id="title-meta">{Related.title || "Untitle video"}</span>
            <span id="user-meta">
              {Related.name} {Related.surname1} {Related.surname2}
            </span>

            <span id="date-meta">
              {Related.team} ·{" "}
              {Related.created_at.substring(0, 16).replace("T", " ")}
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export { RelatedVideos };

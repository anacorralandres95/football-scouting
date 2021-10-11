import React, { useReducer, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getRelatedVideos } from "../../http/VideosService";
import { RelatedReducer } from "../../reducers/RelatedReducer";
import "./related-videos.css";

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
              {`${Related.team} · ${Related.created_at
                .substring(0, 16)
                .replace("T", " ")}`}
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export { RelatedVideos };

import React from "react";
import { useHistory } from "react-router-dom";

function Loading() {
  return <p>Loading</p>;
}

function AllMyVideosList({ myvideos, onMyVideoSelected }) {
  const history = useHistory();

  if (myvideos === undefined) return <Loading />;

  if (myvideos.length === 0) {
    return <h1 id="empty">Sube tu primer vídeo a la plataforma.</h1>;
  }

  return (
    <React.Fragment>
      <ul>
        {myvideos.map((MyVideo, i) => (
          <li
            className="video-player"
            key={MyVideo.video_id}
            onClick={() => {
              onMyVideoSelected(myvideos[i]);
              history.push(`/video/${MyVideo.video_id}`);
            }}
          >
            <video src={MyVideo.video_url} />

            <span id="title-meta">{MyVideo.title || "Untitle video"}</span>
            <span id="user-meta">
              {MyVideo.name} {MyVideo.surname1} {MyVideo.surname2}
            </span>

            <span id="date-meta">
              {MyVideo.team} ·{" "}
              {MyVideo.created_at.substring(0, 16).replace("T", " ")}
            </span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export { AllMyVideosList };

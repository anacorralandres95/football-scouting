import React from "react";
import { useHistory } from "react-router-dom";
import formatMessage from "format-message";
import "./all-video-list.css";

function Loading() {
  return <p>{formatMessage("Loading")}</p>;
}

function AllVideosList({ videos, onVideoSelected, isDashboard, isFavorites }) {
  const history = useHistory();

  if (videos === undefined) return <Loading />;

  if (videos === null && isDashboard) {
    return <div>{formatMessage("Error")}</div>;
  }

  if (videos.length === 0 && isFavorites) {
    return (
      <h1 id="empty">
        {formatMessage(
          "Aún no has añadido ningún vídeo en tu lista de favoritos."
        )}
      </h1>
    );
  }

  if (videos.length === 0 && !isDashboard) {
    return (
      <h1 id="empty">
        {formatMessage("Sube tu primer vídeo a la plataforma.")}
      </h1>
    );
  }

  return (
    <>
      <section id="ranking">
        <ul>
          {videos.map((Video, i) => (
            <li
              className="video-player"
              key={Video.video_id}
              onClick={() => {
                onVideoSelected(videos[i]);
                history.push(`/video/${Video.video_id}`);
              }}
            >
              <video src={Video.video_url} />
              <span id="title-meta">{Video.title || "Untitle video"}</span>
              <span id="user-meta">
                {Video.name} {Video.surname1} {Video.surname2}
              </span>

              <span id="date-meta">
                {Video.team} ·{" "}
                {Video.created_at.substring(0, 16).replace("T", " ")}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export { AllVideosList };

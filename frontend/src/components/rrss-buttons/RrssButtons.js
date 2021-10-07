import React from "react";
import formatMessage from "format-message";
import "./rrss-buttons.css";

export const RrssButtons = () => {
  return (
    <section className="loguearse">
      <button>
        <p>{formatMessage("Entrar con Google")}</p>
      </button>
      <button>
        <p>{formatMessage("Entrar con Facebook")}</p>
      </button>
    </section>
  );
};

import React from "react";
import formatMessage from "format-message";
import illustration from "../../assets/img/404.svg";
import { ButtonLink } from "../../components/button-link/ButtonLink";
import "./404.css";

function NotFound() {
  return (
    <section id="notfound">
      <img src={illustration} alt="" />
      <ButtonLink
        title={formatMessage("Página de inicio")}
        link={"/dashboard"}
      />
    </section>
  );
}

export { NotFound };

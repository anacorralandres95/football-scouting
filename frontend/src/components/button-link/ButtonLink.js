import React from "react";
import { Link } from "react-router-dom";
import "./button-link.css";

export const ButtonLink = ({ title, link }) => {
  return (
    <section id="button-link">
      <button id="button-enter-login">
        <Link to={link}>{title}</Link>
      </button>
    </section>
  );
};

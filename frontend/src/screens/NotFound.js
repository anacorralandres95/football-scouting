import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/img/404.svg";
import "../css/404.css";

function NotFound() {
  return (
    <section id="notfound">
      <img src={illustration} alt="" />
      <button>
        <Link to="/dashboard">PÁGINA DE INICIO</Link>
      </button>
    </section>
  );
}

export { NotFound };

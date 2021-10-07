import React from "react";
import "./button.css";

export const Button = ({ title, onPress }) => {
  return (
    <button onClick={onPress} id="button">
      {title}
    </button>
  );
};

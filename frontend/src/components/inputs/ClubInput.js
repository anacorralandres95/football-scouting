import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const ClubInput = ({ register, errors }) => {
  return (
    <fieldset id="form-club-register">
      <label for="club">{formatMessage("EMPRESA · CLUB")}</label>
      <input
        type="text"
        name="club"
        id="club-register"
        className={`${isFieldValid("club", errors)}`}
        {...register}
      />

      <span className="errorMessage">{errors.club && errors.club.message}</span>
    </fieldset>
  );
};

import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const DateBirthInput = ({ register, errors }) => {
  return (
    <fieldset id="form-datebirth-file-card">
      <label for="datebirth">
        {formatMessage("Fecha de nacimiento 0000-00-00")}
      </label>
      <input
        type="text"
        name="date_birth"
        id="datebirth-file-card"
        className={`${isFieldValid("date_birth", errors)}`}
        {...register}
      />
      <span className="errorMessage">
        {errors.date_birth && errors.date_birth.message}
      </span>
    </fieldset>
  );
};

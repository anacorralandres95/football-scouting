import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const GenderInput = ({ register, errors }) => {
  return (
    <fieldset id="form-gender-register">
      <label for="gender">{formatMessage("Sexo")}</label>

      <select
        name="gender"
        id="gender-register"
        className={`${isFieldValid("gender", errors)}`}
        {...register}
      >
        <option value="">--</option>
        <option value="Mujer">{formatMessage("Mujer")}</option>
        <option value="Hombre">{formatMessage("Hombre")}</option>
        <option value="Otro">{formatMessage("Otro")}</option>
      </select>
      <span className="errorMessage">
        {errors.gender && errors.gender.message}
      </span>
    </fieldset>
  );
};

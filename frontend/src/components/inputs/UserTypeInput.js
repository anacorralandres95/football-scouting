import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const UserTypeInput = ({ register, errors, value }) => {
  return (
    <fieldset id="form-type-register">
      <label for="user_type">{formatMessage("Tipo de usuario")}</label>

      <select
        name="user_type"
        id="type-register"
        className={`${isFieldValid("user_type", errors)}`}
        {...register}
      >
        <option value={value}>{value}</option>
      </select>
      <span className="errorMessage">
        {errors.user_type && errors.user_type.message}
      </span>
    </fieldset>
  );
};

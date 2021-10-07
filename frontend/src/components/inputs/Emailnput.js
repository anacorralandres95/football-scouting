import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const EmailInput = ({ register, errors }) => {
  return (
    <fieldset id="form-email-login">
      <label for="email">{formatMessage("Correo electrónico")}</label>
      <input
        type="email"
        name="email"
        id="email-login"
        className={`${isFieldValid("email", errors)}`}
        {...register}
      />
      <span className="errorMessage">
        {errors?.email && errors.email.message}
      </span>
    </fieldset>
  );
};

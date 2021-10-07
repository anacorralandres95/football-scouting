import React from "react";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const PasswordInput = ({ register, errors, title }) => {
  return (
    <fieldset id="form-password-login">
      <label for="password">{title}</label>
      <input
        type="password"
        name="password"
        id="password-login"
        className={`${isFieldValid("password", errors)}`}
        {...register}
      />
      <span className="errorMessage">
        {errors?.password && errors.password.message}
      </span>
    </fieldset>
  );
};

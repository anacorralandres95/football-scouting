import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const NameInputs = ({
  registerName,
  registerSurname1,
  registerSurname2,
  errors,
}) => {
  return (
    <>
      <fieldset id="form-name-register">
        <label for="name">{formatMessage("Nombre")}</label>
        <input
          type="text"
          name="user_name"
          id="name-register"
          className={`${isFieldValid("user_name", errors)}`}
          {...registerName}
        />

        <span className="errorMessage">
          {errors.user_name && errors.user_name.message}
        </span>
      </fieldset>

      <fieldset id="form-lastname1-register">
        <label for="lastname1">{formatMessage("Primer apellido")}</label>
        <input
          type="text"
          name="surname1"
          id="lastname1-register"
          className={`${isFieldValid("surname1", errors)}`}
          {...registerSurname1}
        />

        <span className="errorMessage">
          {errors.surname1 && errors.surname1.message}
        </span>
      </fieldset>

      <fieldset id="form-lastname2-register">
        <label for="lastname2">{formatMessage("Segundo apellido")}</label>
        <input
          type="text"
          name="surname2"
          id="lastname2-register"
          className={`${isFieldValid("surname2", errors)}`}
          {...registerSurname2}
        />

        <span className="errorMessage">
          {errors.surname2 && errors.surname2.message}
        </span>
      </fieldset>
    </>
  );
};

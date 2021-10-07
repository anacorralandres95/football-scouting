import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const InfoInputs = ({
  genderRegister,
  postalCodeRegister,
  phoneRegister,
  errors,
}) => {
  return (
    <>
      <fieldset id="form-gender-register">
        <label for="gender">{formatMessage("Sexo")}</label>

        <select
          name="gender"
          id="gender-register"
          className={`${isFieldValid("gender", errors)}`}
          {...genderRegister}
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

      <fieldset id="form-code-register">
        <label for="code">{formatMessage("Código postal")}</label>
        <input
          type="text"
          name="postal_code"
          id="code-register"
          className={`${isFieldValid("postal_code", errors)}`}
          {...postalCodeRegister}
        />

        <span className="errorMessage">
          {errors.postal_code && errors.postal_code.message}
        </span>
      </fieldset>

      <fieldset id="form-phone-register">
        <label for="phone">{formatMessage("Teléfono móvil")}</label>
        <input
          type="text"
          name="phone"
          id="phone-register"
          className={`${isFieldValid("phone", errors)}`}
          {...phoneRegister}
        />

        <span className="errorMessage">
          {errors.phone && errors.phone.message}
        </span>
      </fieldset>
    </>
  );
};

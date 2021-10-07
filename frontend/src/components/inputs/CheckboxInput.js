import React from "react";
import formatMessage from "format-message";
import "./inputs.css";

export const CheckboxInput = ({ register, errors }) => {
  return (
    <fieldset className="container">
      <label className="switch" for="checkbox">
        <input type="checkbox" id="checkbox" name="terms" {...register} />
        <div className="slider round"></div>
      </label>
      <label for="terms">
        {formatMessage("Estoy de acuerdo con todos los términos y condiciones")}
      </label>
      <span className="errorMessage">
        {errors?.checkbox && errors.checkbox.message}
      </span>
    </fieldset>
  );
};

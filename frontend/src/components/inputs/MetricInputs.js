import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";

export const MetricInputs = ({ registerHeight, registerWeight, errors }) => {
  return (
    <>
      <fieldset id="form-height-file-card">
        <label for="height">{formatMessage("Altura (0.0)")}</label>
        <input
          type="text"
          name="height"
          id="height-file-card"
          className={`${isFieldValid("height", errors)}`}
          {...registerHeight}
        />

        <span className="errorMessage">
          {errors.height && errors.height.message}
        </span>
      </fieldset>

      <fieldset id="form-weight-file-card">
        <label for="weight">{formatMessage("Peso (00)")}</label>
        <input
          type="text"
          name="weight"
          id="weight-file-card"
          className={`${isFieldValid("weight", errors)}`}
          {...registerWeight}
        />

        <span className="errorMessage">
          {errors.weight && errors.weight.message}
        </span>
      </fieldset>
    </>
  );
};

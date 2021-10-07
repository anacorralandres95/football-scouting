import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import "./inputs.css";
import { DEMARCATION_OPTIONS } from "../../utils/constants";

export const FootballSkillsInputs = ({
  registerTeam,
  registerDemarcation,
  registerBestLeg,
  errors,
}) => {
  return (
    <>
      <fieldset id="form-team-file-card">
        <label for="team">{formatMessage("Equipo actual")}</label>
        <input
          type="text"
          name="team"
          id="team-file-card"
          className={`${isFieldValid("team", errors)}`}
          {...registerTeam}
        />

        <span className="errorMessage">
          {errors.team && errors.team.message}
        </span>
      </fieldset>

      <fieldset id="form-demarcation-file-card">
        <label for="demarcation">{formatMessage("Demarcación")}</label>

        <select
          name="demarcation"
          id="demarcation-file-card"
          className={`${isFieldValid("demarcation", errors)}`}
          {...registerDemarcation}
        >
          <option value="">--</option>
          {DEMARCATION_OPTIONS.map((demarcation) => {
            return <option value={demarcation}>{demarcation}</option>;
          })}
        </select>
        <span className="errorMessage">
          {errors.demarcation && errors.demarcation.message}
        </span>
      </fieldset>

      <fieldset id="form-leg-file-card">
        <label for="leg">{formatMessage("Mejor pierna")}</label>

        <select
          name="best_leg"
          id="pierna-ficha"
          className={`${isFieldValid("user_name", errors)}`}
          {...registerBestLeg}
        >
          <option value="">--</option>
          <option value="Derecha">{formatMessage("Derecha")}</option>
          <option value="Izquierda">{formatMessage("Izquierda")}</option>
        </select>
        <span className="errorMessage">
          {errors.best_leg && errors.best_leg.message}
        </span>
      </fieldset>
    </>
  );
};

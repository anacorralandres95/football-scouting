import React from "react";
import formatMessage from "format-message";
import { isFieldValid } from "../../utils/inputUtils";
import { COMMUNITIES_OPTIONS, PROVINCES_OPTIONS } from "../../utils/constants";
import "./inputs.css";

export const LocationInputs = ({
  registerCommunity,
  registerProvince,
  errors,
}) => {
  return (
    <>
      <fieldset id="form-community-file-card">
        <label for="comunity">{formatMessage("Comunidad autónoma")}</label>

        <select
          name="comunity"
          id="community-file-card"
          className={`${isFieldValid("comunity", errors)}`}
          {...registerCommunity}
        >
          <option value="">--</option>
          {COMMUNITIES_OPTIONS.map((community) => {
            return <option value={community}>{community}</option>;
          })}
        </select>
        <span className="errorMessage">
          {errors.comunity && errors.comunity.message}
        </span>
      </fieldset>

      <fieldset id="form-province-file-card">
        <label for="province">{formatMessage("Provincia")}</label>

        <select
          name="province"
          id="province-file-card"
          className={`${isFieldValid("province", errors)}`}
          {...registerProvince}
        >
          <option value="">--</option>
          {PROVINCES_OPTIONS.map((province) => {
            return <option value={province}>{province}</option>;
          })}
        </select>

        <span className="errorMessage">
          {errors.province && errors.province.message}
        </span>
      </fieldset>
    </>
  );
};

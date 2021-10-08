import React from "react";
import formatMessage from "format-message";
import "./filters.css";
import {
  COMMUNITIES_OPTIONS,
  DEMARCATION_OPTIONS,
  PROVINCES_OPTIONS,
} from "../../utils/constants";

function Filters({ setFilter, filters }) {
  return (
    <>
      <h1> {formatMessage("Filtros")}</h1>
      <fieldset id="community-fieldset">
        <label for="community-filter">
          {formatMessage("Comunidad autónoma")}
        </label>
        <select
          name="community-filter"
          id="community-filter"
          onChange={(e) => setFilter(e, "filterComunity")}
        >
          <option value="">--</option>
          {COMMUNITIES_OPTIONS.map((community) => {
            return <option value={community}>{community}</option>;
          })}
        </select>
      </fieldset>

      <fieldset id="province-fieldset">
        <label for="province-filter">{formatMessage("Provincia")}</label>
        <select
          name="province-filter"
          id="province-filter"
          onChange={(e) => setFilter(e, "filterProvince")}
        >
          <option value="">--</option>
          {PROVINCES_OPTIONS.map((province) => {
            return <option value={province}>{province}</option>;
          })}
        </select>
      </fieldset>

      <fieldset id="gender-fieldset">
        <label for="gender-filter"> {formatMessage("Sexo")}</label>
        <select
          name="gender-filter"
          id="gender-filter"
          onChange={(e) => setFilter(e, "filterGender")}
        >
          <option value="">--</option>
          <option value="Niño">{formatMessage("Niño")}</option>
          <option value="Niña">{formatMessage("Niña")}</option>
          <option value="Otro">{formatMessage("Otro")}</option>
        </select>
      </fieldset>

      <fieldset id="height-fieldset">
        <label for="height-filter">{formatMessage("Altura")}</label>
        <input
          className="range-height-filter"
          type="range"
          min="0.50"
          max="2.00"
          step="0.10"
          onChange={(e) => setFilter(e, "filterHeight")}
        />
        <p id="value-height-filter">{filters.filterHeight}</p>
      </fieldset>

      <fieldset id="weight-fieldset">
        <label for="weight-filter"> {formatMessage("Peso")}</label>
        <input
          className="range-weight-filter"
          type="range"
          min="25"
          max="90"
          step="5"
          onChange={(e) => setFilter(e, "filterWeight")}
        />
        <p id="value-weight-filter">{filters.filterWeight}</p>
      </fieldset>

      <fieldset id="demarcation-fieldset">
        <label for="demarcation-filter">{formatMessage("Demarcación")}</label>
        <select
          name="demarcation-filter"
          id="demarcation-filter"
          onChange={(e) => setFilter(e, "filterDemarcation")}
        >
          <option value="">--</option>
          {DEMARCATION_OPTIONS.map((demarcation) => {
            return <option value={demarcation}>{demarcation}</option>;
          })}
        </select>
      </fieldset>

      <fieldset id="leg-fieldset">
        <label for="leg-filter"> {formatMessage("Mejor pierna")}</label>
        <select
          name="leg-filter"
          id="leg-filter"
          onChange={(e) => setFilter(e, "filterBestLeg")}
        >
          <option value="">--</option>
          <option value="Derecha"> {formatMessage("Derecha")}</option>
          <option value="Izquierda"> {formatMessage("Izquierda")}</option>
        </select>
      </fieldset>
    </>
  );
}

export { Filters };

import React from "react";
import formatMessage from "format-message";
import { Register } from "./common/Register";

function ScoutRegister() {
  return <Register value={"Ojeador"} title={formatMessage("Ojeador")} />;
}

export { ScoutRegister };

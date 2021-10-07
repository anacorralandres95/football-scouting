import React from "react";
import formatMessage from "format-message";
import { Register } from "./common/Register";

function PromiseRegister() {
  return (
    <Register value={"Padre"} title={formatMessage("Promesa de fútbol")} />
  );
}

export { PromiseRegister };

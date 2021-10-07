import React from "react";
import formatMessage from "format-message";
import { Register } from "./common/Register";

function AssistantRegister() {
  return <Register value={"Asistente"} title={formatMessage("Asistente")} />;
}

export { AssistantRegister };

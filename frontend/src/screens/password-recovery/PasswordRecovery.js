import React from "react";
import formatMessage from "format-message";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { Faqs } from "../../components/Faqs.js";
import { PasswordInput } from "../../components/inputs/PasswordInput.js";
import { CheckboxInput } from "../../components/inputs/CheckboxInput.js";
import { Button } from "../../components/button/Button.js";
import "./password-recovery.css";

function PasswordRecovery() {
  const handleOnPress = () => window.alert("Funcionalidad aún no disponible");

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-recovery">
        <h1>{formatMessage("Recuperar contraseña")}</h1>

        <section className="forms">
          <PasswordInput title={formatMessage("Nueva contraseña")} />
          <PasswordInput title={formatMessage("Repetir contraseña")} />
          <CheckboxInput />
          <Button title={formatMessage("Acceder")} onPress={handleOnPress} />
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { PasswordRecovery };

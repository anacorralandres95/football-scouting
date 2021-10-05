import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/password-recovery.css";

function PasswordRecovery () {
    return (
        <React.Fragment>
            <Header />
            <Faqs />

            <section className="target-recovery">
                <h1>RECUPERAR CONTRASEÑA</h1>
                <section className="forms">
                    <fieldset id="form-new-password">
                        <label for="password">NUEVA CONTRASEÑA</label>
                        <input type="password" name="new-password" id="new-password" />
                    </fieldset>
                    <fieldset id="form-repeat-new-password">
                        <label for="password">REPETIR CONTRASEÑA </label>
                        <input type="password" name="repeat-new-password" id="repeat-new-password" />
                    </fieldset>
                    <fieldset className="container">
                        <label className="switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="slider round"></div>
                        </label>
                        <label for="terms">Estoy de acuerdo con todos los términos y condiciones</label>
                    </fieldset>
                </section>
                <section class="enter">
                    <button id="button-enter-password" onClick={() => window.alert("Funcionalidad aún no disponible")}>
                    <a>ACCEDER</a>
                    </button>
                </section>
            </section>

        <Footer />
        </React.Fragment>
    )
}

export { PasswordRecovery };
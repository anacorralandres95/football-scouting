import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/registration.css";

function AssistantRegister() {
  const { signUp } = useAuth();
  const { register, handleSubmit, errors, setError, formState } = useForm({
    mode: "onBlur",
  });

  const handleSignUp = (formData) => {
    return signUp(formData).catch((error) => {
      if (error.response.status === 409) {
        setError(
          "email",
          "conflict",
          "The email already exists. Please try again"
        );
      }
    });
  };

  const isFieldValid = (name) => {
    return errors[name] ? "error" : formState.touched.includes(name) && "ok";
  };

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-registration">
        <h1>ASISTENTE</h1>

        <section className="loguearse">
          <button>
            <a href="">ENTRAR CON GOOGLE</a>
          </button>
          <button>
            <a href="">ENTRAR CON FACEBOOK</a>
          </button>
        </section>

        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="form-registration"
        >
          <fieldset id="form-name-register-assistant">
            <label for="name">NOMBRE</label>
            <input
              type="text"
              name="user_name"
              id="name-register-assistant"
              className={`${isFieldValid("user_name")}`}
              ref={register({ required: "* Campo requerido" })}
            />

            <span className="errorMessage">
              {errors.user_name && errors.user_name.message}
            </span>
          </fieldset>

          <fieldset id="form-lastname1-register-assistant">
            <label for="lastname1">PRIMER APELLIDO</label>
            <input
              type="text"
              name="surname1"
              id="lastname1-register-assistant"
              className={`${isFieldValid("surname1")}`}
              ref={register({ required: "* Campo requerido" })}
            />

            <span className="errorMessage">
              {errors.surname1 && errors.surname1.message}
            </span>
          </fieldset>

          <fieldset id="form-lastname2-register-assistant">
            <label for="lastname2">SEGUNDO APELLIDO</label>
            <input
              type="text"
              name="surname2"
              id="lastname2-register-assistant"
              className={`${isFieldValid("surname2")}`}
              ref={register({ required: "* Campo requerido" })}
            />

            <span className="errorMessage">
              {errors.surname2 && errors.surname2.message}
            </span>
          </fieldset>

          <fieldset id="form-gender-register-assistant">
            <label for="gender">SEXO</label>

            <select
              name="gender"
              id="gender-register-assistant"
              className={`${isFieldValid("gender")}`}
              ref={register({ required: "* Campo requerido" })}
            >
              <option value="">--</option>
              <option value="Mujer">Mujer</option>
              <option value="Hombre">Hombre</option>
              <option value="Otro">Otro</option>
            </select>
            <span className="errorMessage">
              {errors.gender && errors.gender.message}
            </span>
          </fieldset>

          <fieldset id="form-code-register-assistant">
            <label for="code">CÓDIGO POSTAL</label>
            <input
              type="text"
              name="postal_code"
              id="code-register-assistant"
              className={`${isFieldValid("postal_code")}`}
              ref={register({ required: "* Campo requerido" })}
            />

            <span className="errorMessage">
              {errors.postal_code && errors.postal_code.message}
            </span>
          </fieldset>

          <fieldset id="form-phone-register-assistant">
            <label for="phone">TELÉFONO MÓVIL</label>
            <input
              type="text"
              name="phone"
              id="phone-register-assistant"
              className={`${isFieldValid("phone")}`}
              ref={register({ required: "* Campo requerido" })}
            />

            <span className="errorMessage">
              {errors.phone && errors.phone.message}
            </span>
          </fieldset>

          <fieldset id="form-mail-register-assistant">
            <label for="email">CORREO ELECTRÓNICO</label>
            <input
              type="email"
              name="email"
              id="mail-register-assistant"
              className={`${isFieldValid("email")}`}
              ref={register({
                required: "* Campo requerido",
                pattern: {
                  message: "* El email no es válido",
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
            />

            <span className="errorMessage">
              {errors.email && errors.email.message}
            </span>
          </fieldset>

          <fieldset id="form-password-register-assistant">
            <label for="password">CONTRASEÑA</label>
            <input
              type="password"
              name="password"
              id="password-register-assistant"
              className={`${isFieldValid("password")}`}
              ref={register({
                required: "* Campo requerido",
                minLength: {
                  message: "* La contraseña debe ser mayor de 6 dígitos",
                  value: 6,
                },
              })}
            />

            <span className="errorMessage">
              {errors.password && errors.password.message}
            </span>
          </fieldset>

          <fieldset id="form-repeat-password-register-assistant">
            <label for="repeat-password">REPETIR CONTRASEÑA</label>
            <input
              type="password"
              name="repeat"
              id="repeat-password-register-assistant"
              className={`${isFieldValid("repeat")}`}
              ref={register({ required: "* Campo requerido" })}
            />

            <span className="errorMessage">
              {errors.repeat && errors.repeat.message}
            </span>
          </fieldset>

          <fieldset id="form-type-register-father">
            <label for="user_type">TIPO DE USUARIO</label>

            <select
              name="user_type"
              id="type-register-father"
              className={`${isFieldValid("user_type")}`}
              ref={register({ required: "* Campo requerido" })}
            >
              <option value="Asistente">Asistente</option>
            </select>
            <span className="errorMessage">
              {errors.user_type && errors.user_type.message}
            </span>
          </fieldset>

          <fieldset className="container">
            <label className="switch" for="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                name="terms"
                ref={register({
                  required: "* Acepta este campo para continuar",
                })}
              />
              <div className="slider round"></div>
            </label>
            <label for="terms">
              Estoy de acuerdo con todos los términos y condiciones
            </label>
            <span className="errorMessage">
              {errors.terms && errors.terms.message}
            </span>
          </fieldset>

          <button id="button-enter-login">
            ENVIAR
            {/* <Link to="/dashboard">ENVIAR</Link> */}
          </button>
        </form>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { AssistantRegister };

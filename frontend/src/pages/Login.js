import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/login.css";

function Login() {
  const { signIn } = useAuth();
  const { register, handleSubmit, errors, setError, formState, setValue } =
    useForm({ mode: "onBlur" });

  const handleSignIn = (formData) => {
    return signIn(formData)
      .then((d) => console.log(d))
      .catch((error) => {
        setError(
          "password",
          "invalidCredentials",
          "The email or the password are invalid"
        );
        setValue("password", "");
      });
  };

  const isFieldValid = (name) => {
    return errors[name] ? "error" : formState.touched.includes(name) && "ok";
  };

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-login">
        <h1>LOGIN</h1>
        <section className="loguearse">
          <button>
            <a href="">ENTRAR CON GOOGLE</a>
          </button>
          <button>
            <a href="">ENTRAR CON FACEBOOK</a>
          </button>
        </section>

        <form onSubmit={handleSubmit(handleSignIn)} className="forms">
          <fieldset id="form-email-login">
            <label for="email">CORREO ELECTRÓNICO</label>
            <input
              type="email"
              name="email"
              id="email-login"
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

          <fieldset id="form-password-login">
            <label for="password">CONTRASEÑA</label>
            <input
              type="password"
              name="password"
              id="password-login"
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

          <button id="button-acceder-login">
            ACCEDER
            {/* <Link to="/dashboard">ACCEDER</Link> */}
          </button>
          <Link to="/password-recovery" id="recover">
            Olvidé mi contraseña
          </Link>
        </form>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { Login };

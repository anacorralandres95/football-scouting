import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import formatMessage from "format-message";
import { useAuth } from "../../shared/context/auth-context";
import { Header } from "../../components/headers/Header.js";
import { Footer } from "../../components/footer/Footer.js";
import { Faqs } from "../../components/faqs/Faqs.js";
import { EmailInput } from "../../components/inputs/Emailnput";
import { PasswordInput } from "../../components/inputs/PasswordInput";
import { CheckboxInput } from "../../components/inputs/CheckboxInput";
import { Button } from "../../components/button/Button";
import { EMAIL_REGEX, MAX_LENGTH_PASSWORD } from "../../utils/constants";
import "./login.css";
import { RrssButtons } from "../../components/rrss-buttons/RrssButtons";

function Login() {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onBlur",
  });

  const handleSignIn = (formData) => {
    try {
      signIn(formData);
    } catch {
      setError(
        "password",
        "invalidCredentials",
        "The email or the password are invalid"
      );
      setValue("password", "");
    }
  };

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-login">
        <h1>{formatMessage("Login")}</h1>
        <RrssButtons />

        <form onSubmit={handleSubmit(handleSignIn)} className="forms">
          <EmailInput
            register={register("email", {
              required: "* Campo requerido",
              pattern: {
                message: "* El email no es válido",
                value: EMAIL_REGEX,
              },
            })}
            errors={errors}
          />

          <PasswordInput
            register={register("password", {
              required: "* Campo requerido",
              minLength: {
                message: "* La contraseña debe ser mayor de 6 dígitos",
                value: MAX_LENGTH_PASSWORD,
              },
            })}
            errors={errors}
            title={formatMessage("Contraseña")}
          />

          <CheckboxInput
            register={register("checkbox", {
              required: "* Acepta este campo para continuar",
            })}
            errors={errors}
          />

          <Button title={formatMessage("Acceder")} />

          <Link to="/password-recovery" id="recover">
            {formatMessage("Olvidé mi contraseña")}
          </Link>
        </form>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { Login };

import React from "react";
import { useForm } from "react-hook-form";
import formatMessage from "format-message";
import { useAuth } from "../../../shared/context/auth-context";
import { Header } from "../../../components/Header.js";
import { Footer } from "../../../components/Footer.js";
import { Faqs } from "../../../components/Faqs.js";
import { RrssButtons } from "../../../components/rrss-buttons/RrssButtons";
import { NameInputs } from "../../../components/inputs/NameInputs";
import { Button } from "../../../components/button/Button";
import { InfoInputs } from "../../../components/inputs/InfoInputs";
import { EmailInput } from "../../../components/inputs/Emailnput";
import { EMAIL_REGEX, MAX_LENGTH_PASSWORD } from "../../../utils/constants";
import { PasswordInput } from "../../../components/inputs/PasswordInput";
import { UserTypeInput } from "../../../components/inputs/UserTypeInput";
import { CheckboxInput } from "../../../components/inputs/CheckboxInput";
import "./registration.css";
import { ClubInput } from "../../../components/inputs/ClubInput";

function Register({ value, title }) {
  const { signUp } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
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

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-registration">
        <h1>{title}</h1>
        {value === "Padre" && (
          <small>
            {formatMessage(
              "Introduzca los datos del tutor o representante legal."
            )}
          </small>
        )}

        <RrssButtons />

        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="form-registration"
        >
          <NameInputs
            registerName={register("user_name", {
              required: "* Campo requerido",
            })}
            registerSurname1={register("surname1", {
              required: "* Campo requerido",
            })}
            registerSurname2={register("surname2", {
              required: "* Campo requerido",
            })}
            errors={errors}
          />

          {value === "Ojeador" && (
            <ClubInput
              register={register("club", { required: "* Campo requerido" })}
              errors={errors}
            />
          )}

          <InfoInputs
            genderRegister={register("gender", {
              required: "* Campo requerido",
            })}
            postalCodeRegister={register("postal_code", {
              required: "* Campo requerido",
            })}
            phoneRegister={register("phone", { required: "* Campo requerido" })}
            errors={errors}
          />

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

          <PasswordInput
            register={register("password", {
              required: "* Campo requerido",
              minLength: {
                message: "* La contraseña debe ser mayor de 6 dígitos",
                value: MAX_LENGTH_PASSWORD,
              },
            })}
            errors={errors}
            title={formatMessage("Repetir contraseña")}
          />

          <UserTypeInput
            register={register("user_type", { required: "* Campo requerido" })}
            errors={errors}
            value={value}
          />

          <CheckboxInput
            register={register("checkbox", {
              required: "* Acepta este campo para continuar",
            })}
            errors={errors}
          />

          <Button title={formatMessage("Enviar")} />
        </form>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { Register };

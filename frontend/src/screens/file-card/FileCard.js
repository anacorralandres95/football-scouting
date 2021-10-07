import React from "react";
import { useHistory } from "react-router-dom";
import formatMessage from "format-message";
import { useAuth } from "../../shared/context/auth-context";
import { Header } from "../../components/Header.js";
import { Footer } from "../../components/Footer.js";
import { Faqs } from "../../components/Faqs.js";
import photo from "../../assets/icons/user.png";
import { Button } from "../../components/button/Button.js";
import { NameInputs } from "../../components/inputs/NameInputs";
import "./file-card.css";
import { useForm } from "react-hook-form";
import { GenderInput } from "../../components/inputs/GenderInput";
import { CheckboxInput } from "../../components/inputs/CheckboxInput";
import { DateBirthInput } from "../../components/inputs/DateBirthInput";
import { LocationInputs } from "../../components/inputs/LocationInputs";
import { MetricInputs } from "../../components/inputs/MetricInputs";
import { FootballSkillsInputs } from "../../components/inputs/FootballSkillsInputs";

function FileCard() {
  const { signUpPromise } = useAuth();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleSignUpPromise = (formData) => {
    setTimeout(function createPlayer() {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      return signUpPromise(formData, config)
        .then(() => {
          history.push("/dashboard");
        })
        .catch((error) => {
          if (error?.response?.status === 409) {
            setError(
              "email",
              "conflict",
              "The email already exists. Please try again"
            );
          }
        });
    }, 1000);
  };

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-card">
        <h1>{formatMessage("Ficha · Promesa de fútbol")}</h1>

        <form
          onSubmit={handleSubmit(handleSignUpPromise)}
          className="form-file-card"
          id="form-player"
        >
          <section className="upload-photo">
            <img src={photo} alt="" />
            <input type="file" name="avatar_url" id="avatar-user" />
          </section>

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

          <GenderInput
            register={register("gender", {
              required: "* Campo requerido",
            })}
            errors={errors}
          />

          <DateBirthInput
            register={register("date_birth", {
              required: "* Campo requerido",
            })}
            errors={errors}
          />

          <LocationInputs
            registerCommunity={register("comunity", {
              required: "* Campo requerido",
            })}
            registerProvince={register("province", {
              required: "* Campo requerido",
            })}
            errors={errors}
          />

          <MetricInputs
            registerHeight={register("height", {
              required: "* Campo requerido",
            })}
            registerWeight={register("weight", {
              required: "* Campo requerido",
            })}
            errors={errors}
          />

          <FootballSkillsInputs
            registerTeam={register("team", {
              required: "* Campo requerido",
            })}
            registerDemarcation={register("demarcation", {
              required: "* Campo requerido",
            })}
            registerBestLeg={register("best_leg", {
              required: "* Campo requerido",
            })}
            errors={errors}
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

export { FileCard };

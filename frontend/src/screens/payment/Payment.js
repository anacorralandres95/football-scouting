import React, { useState } from "react";
import formatMessage from "format-message";
import { Header } from "../../components/headers/Header.js";
import { Footer } from "../../components/footer/Footer.js";
import { Faqs } from "../../components/faqs/Faqs.js";
import { CreditCard } from "./credit-card/CreditCard.js";
import { ButtonLink } from "../../components/button-link/ButtonLink.js";
import { CheckboxInput } from "../../components/inputs/CheckboxInput";
import "./payment.css";
import { MONTH_OPTIONS, YEAR_OPTIONS } from "../../utils/constants.js";

function Payment() {
  const [cardHolder1, setCardHolder1] = useState();
  const [cardHolder2, setCardHolder2] = useState();
  const [cardHolder3, setCardHolder3] = useState();
  const [cardHolder4, setCardHolder4] = useState();
  const [titular, setTitular] = useState();
  const [caducidad1, setCaducidad1] = useState();
  const [caducidad2, setCaducidad2] = useState();
  const [ccv, setCcv] = useState();

  return (
    <React.Fragment>
      <Header />
      <Faqs />

      <section className="target-payment">
        <h1>{formatMessage("Pago inscripción · 10€ al mes")}</h1>

        <section className="payment">
          <div className="checkout">
            <CreditCard
              cardHolder1={cardHolder1}
              cardHolder2={cardHolder2}
              cardHolder3={cardHolder3}
              cardHolder4={cardHolder4}
              titular={titular}
              caducidad1={caducidad1}
              caducidad2={caducidad2}
              ccv={ccv}
            />
            <form className="form" autocomplete="off" novalidate>
              <fieldset className="number-card">
                <label for="card-number">
                  {formatMessage("Número de tarjeta")}
                </label>
                <input
                  type="num"
                  id="card-number"
                  className="input-card-number"
                  maxlength="4"
                  onChange={(e) => setCardHolder1(e.target.value)}
                />
                <input
                  type="num"
                  id="card-number-1"
                  className="input-card-number"
                  maxlength="4"
                  onChange={(e) => setCardHolder2(e.target.value)}
                />
                <input
                  type="num"
                  id="card-number-2"
                  className="input-card-number"
                  maxlength="4"
                  onChange={(e) => setCardHolder3(e.target.value)}
                />
                <input
                  type="num"
                  id="card-number-3"
                  className="input-card-number"
                  maxlength="4"
                  onChange={(e) => setCardHolder4(e.target.value)}
                />
              </fieldset>

              <fieldset className="titular">
                <label for="card-holder">{formatMessage("Titular")}</label>
                <input
                  type="text"
                  id="titular"
                  onChange={(e) => setTitular(e.target.value)}
                />
              </fieldset>

              <fieldset className="fieldset-expiration">
                <label for="card-expiration-month">
                  {formatMessage("Fecha de caducidad")}
                </label>
                <div className="select">
                  <select
                    id="card-expiration-month"
                    onChange={(e) => setCaducidad1(`${e.target.value}/`)}
                  >
                    {MONTH_OPTIONS.map((month) => {
                      return <option>{month}</option>;
                    })}
                  </select>
                </div>
                <div className="select">
                  <select
                    id="card-expiration-year"
                    onChange={(e) => setCaducidad2(e.target.value)}
                  >
                    {YEAR_OPTIONS.map((year) => {
                      return <option>{year}</option>;
                    })}
                  </select>
                </div>
              </fieldset>

              <fieldset className="fieldset-ccv">
                <label for="card-ccv">{formatMessage("Cvv")}</label>
                <input
                  type="text"
                  id="card-ccv"
                  maxlength="3"
                  onChange={(e) => setCcv(e.target.value)}
                />
              </fieldset>
            </form>
          </div>
        </section>

        <CheckboxInput />

        <ButtonLink link={"/dashboard"} title={formatMessage("Enviar")} />
      </section>

      <Footer />
    </React.Fragment>
  );
}

export { Payment };

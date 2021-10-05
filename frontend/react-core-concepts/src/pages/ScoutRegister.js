import React from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import "../css/registration.css";

function ScoutRegister () {
    const { signUp } = useAuth();
    const { register, handleSubmit, errors, setError, formState } = useForm({mode:"onBlur"});

    const handleSignUp = formData => {
        return signUp(formData).catch(error => {
          if (error.response.status === 409) {
            setError(
              "email",
              "conflict",
              "The email already exists. Please try again"
            );
          }
        });
      };

    const isFieldValid = name => {
        return errors[name] ? "error" : formState.touched.includes(name) && "ok";
    };


    return (
        <React.Fragment>
            <Header />
            <Faqs />

            <section className="target-registration">
                <h1>OJEADOR</h1>

                <section className="loguearse">
                    <button>
                        <a href="">ENTRAR CON GOOGLE</a>
                    </button>
                    <button>
                        <a href="">ENTRAR CON FACEBOOK</a>
                    </button>
                </section>


                <form onSubmit={handleSubmit(handleSignUp)} className="form-registration">

                        <fieldset id="form-name-register-scout">
                            <label for="name">NOMBRE</label>
                            <input type="text" name="user_name" id="name-register-scout" className={`${isFieldValid("user_name")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.user_name && errors.user_name.message}
                            </span>
                        </fieldset>
        
                        <fieldset id="form-lastname1-register-scout">
                            <label for="lastname1">PRIMER APELLIDO</label>
                            <input type="text" name="surname1" id="lastname1-register-scout" className={`${isFieldValid("surname1")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.surname1 && errors.surname1.message}
                            </span>
                        </fieldset>
        
                        <fieldset id="form-lastname2-register-scout">
                            <label for="lastname2">SEGUNDO APELLIDO</label>
                            <input type="text" name="surname2" id="lastname2-register-scout" className={`${isFieldValid("surname2")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.surname2 && errors.surname2.message}
                            </span>
                        </fieldset>

                        <fieldset id="form-club-register-scout">
                            <label for="club">EMPRESA · CLUB</label>
                            <input type="text" name="club" id="club-register-scout" className={`${isFieldValid("club")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.club && errors.club.message}
                            </span>
                        </fieldset>
        
                        <fieldset id="form-gender-register-scout">
                            <label for="gender">SEXO</label>
        
                            <select name="gender" id="gender-register-scout" className={`${isFieldValid("gender")}`}
                            ref={register({ required: "* Campo requerido" })} >
                            <option value="">--</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Hombre">Hombre</option>
                            <option value="Otro">Otro</option>
                            </select>
                            <span className="errorMessage">
                                {errors.gender && errors.gender.message}
                            </span>
                           
                        </fieldset>

                        <fieldset id="form-code-register-scout">
                            <label for="code">CÓDIGO POSTAL</label>
                            <input type="text" name="postal_code" id="code-register-scout" className={`${isFieldValid("postal_code")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.postal_code && errors.postal_code.message}
                            </span>
                        </fieldset>

                        <fieldset id="form-phone-register-scout">
                            <label for="phone">TELÉFONO MÓVIL</label>
                            <input type="text" name="phone" id="phone-register-scout" className={`${isFieldValid("phone")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.phone && errors.phone.message}
                            </span>
                        </fieldset>

                        <fieldset id="form-mail-register-scout">
                            <label for="email">CORREO ELECTRÓNICO</label>
                            <input type="email" name="email" id="mail-register-scout" className={`${isFieldValid("email")}`}
                            ref={register({ required: "* Campo requerido", pattern: {
                                message: "* El email no es válido",
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                              }} )} />

                            <span className="errorMessage">
                                {errors.email && errors.email.message}
                            </span>
                        </fieldset>

                        <fieldset id="form-password-register-scout">
                            <label for="password">CONTRASEÑA</label>
                            <input type="password" name="password" id="password-register-scout" className={`${isFieldValid("password")}`}
                            ref={register({ required: "* Campo requerido", 
                            minLength: {
                            message: "* La contraseña debe ser mayor de 6 dígitos",
                            value: 6
                          } })} />

                        <span className="errorMessage">
                            {errors.password && errors.password.message}
                        </span>
                        </fieldset>
        
                        <fieldset id="form-repeat-password-register-scout">
                            <label for="repeat-password">REPETIR CONTRASEÑA</label>
                            <input type="password" name="repeat" id="repeat-password-register-scout" className={`${isFieldValid("repeat")}`}
                            ref={register({ required: "* Campo requerido" })} />

                            <span className="errorMessage">
                                {errors.repeat && errors.repeat.message}
                            </span>
                        </fieldset>

                        <fieldset id="form-type-register-father">
                            <label for="user_type">TIPO DE USUARIO</label>
        
                            <select name="user_type" id="type-register-father" className={`${isFieldValid("user_type")}`}
                            ref={register({ required: "* Campo requerido" })} >
                                <option value="Ojeador">Ojeador</option>
                            </select>
                            <span className="errorMessage">
                                {errors.user_type && errors.user_type.message}
                            </span>
                            
                        </fieldset>

                        <fieldset className="container">
                            <label className="switch" for="checkbox">
                            <input type="checkbox" id="checkbox" name="terms" 
                            ref={register({ required: "* Acepta este campo para continuar" })} />
                            <div className="slider round"></div>
                            </label>
                            <label for="terms">Estoy de acuerdo con todos los términos y condiciones</label>
                            <span className="errorMessage">
                                {errors.terms && errors.terms.message}
                            </span>
                        </fieldset>

                        <button id="button-enter-login">
                            ENVIAR
                            {/* <Link to="/payment">ENVIAR</Link> */}
                        </button>
                
                </form>

            </section>

            <Footer />
        </React.Fragment>
    )
}

export { ScoutRegister };
import React from "react";
import { createPromise } from "../http/PromiseService.js";
import { useHistory } from "react-router-dom";
import { Header } from "../components/Header.js";
import { Footer } from "../components/Footer.js";
import { Faqs } from "../components/Faqs.js";
import photo from "../assets/icons/user.png";
import "../css/file-card.css";


function FileCard () {
    const history = useHistory();

    const handleSignUpPromise = e => {
        e.preventDefault();
    
    setTimeout(
    function createPlayer() {
        const formPlayer = document.getElementById('form-player');
        const formData = new FormData (formPlayer);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        history.push("/dashboard")
        return createPromise(formData, config);
    }, 1000);

    }


    return (
        <React.Fragment>
            <Header />
            <Faqs />

            <section className="target-card">
                <h1>FICHA · PROMESA DE FÚTBOL</h1>



                <form onSubmit={handleSignUpPromise} className="form-file-card" id="form-player">

                <section className="upload-photo">
                    <img src={ photo } alt="" />
                    <input type="file" name="avatar_url" id="avatar-user" />

                </section>


                    <fieldset id="form-name-file-card">
                        <label for="name">NOMBRE</label>
                        <input type="text" name="name" id="name-file-card" />

                    </fieldset>

                    <fieldset id="form-lastname1-file-card">
                        <label for="lastname1">PRIMER APELLIDO</label>
                        <input type="text" name="surname1" id="lastname1-file-card" />

                    </fieldset>

                    <fieldset id="form-lastname2-file-card">
                        <label for="lastname2">SEGUNDO APELLIDO</label>
                        <input type="text" name="surname2" id="lastname2-file-card"  />

                    </fieldset>

                    <fieldset id="form-gender-file-card">
                        <label for="gender">SEXO</label>

                        <select name="gender" id="gender-file-card" >
                            <option value="">--</option>
                            <option value="Niño">Niño</option>
                            <option value="Niña">Niña</option>
                            <option value="Otro">Otro</option>
                        </select>
                     
                    </fieldset>

                    <fieldset id="form-datebirth-file-card">
                        <label for="datebirth">FECHA DE NACIMIENTO 0000-00-00</label>
                        <input type="text" name="date_birth" id="datebirth-file-card"  />

                    </fieldset>

                    <fieldset id="form-community-file-card">
                        <label for="community">COMUNIDAD AUTÓNOMA</label>

                        <select name="comunity" id="community-file-card"  >
                            <option value="">--</option>
                            <option value="Andalucía">Andalucia</option>
                            <option value="Aragón">Aragón</option>
                            <option value="Asturias">Asturias</option>
                            <option value="Islas Baleares">Islas Baleares</option>
                            <option value="Canarias">Canarias</option>
                            <option value="Cantabria">Cantabria</option>
                            <option value="Castilla y León">Castilla y León</option>
                            <option value="Castilla La Mancha">Castilla La Mancha</option>
                            <option value="Cataluña">Cataluña</option>
                            <option value="Comunidad Valenciana">Comunidad Valenciana</option>
                            <option value="Extremadura">Extremadura</option>
                            <option value="Galicia">Galicia</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Murcia">Murcia</option>
                            <option value="Navarra">Navarra</option>
                            <option value="País Vasco">País Vasco</option>
                            <option value="La Rioja">La Rioja</option>
                        </select>
                      
                    </fieldset>

                    <fieldset id="form-province-file-card">
                        <label for="province">PROVINCIA</label>

                        <select name="province" id="province-file-card" >
                            <option value="">--</option>
                            <option value="Almería">Almería</option>
                            <option value="Cádiz">Cádiz</option>
                            <option value="Córdoba">Córdoba</option>
                            <option value="Granada">Granada</option>
                            <option value="Huelva">Huelva</option>
                            <option value="Jaén">Jaén</option>
                            <option value="Málaga">Málaga</option>
                            <option value="Sevilla">Sevilla</option>
                            <option value="Huesca">Huesca</option>
                            <option value="Teruel">Teruel</option>
                            <option value="Zaragoza">Zaragoza</option>
                            <option value="Asturias">Asturias</option>
                            <option value="Islas Baleares">Islas Baleares</option>
                            <option value="Las Palmas">Las Palmas</option>
                            <option value="S.Cruz de Tenerife">S.Cruz de Tenerife</option>
                            <option value="Cantabria">Cantabria</option>
                            <option value="Ávila">Ávila</option>
                            <option value="Burgos">Burgos</option>
                            <option value="León">León</option>
                            <option value="Palencia">Palencia</option>
                            <option value="Salamanca">Salamanca</option>
                            <option value="Segovia">Segovia</option>
                            <option value="Soria">Soria</option>
                            <option value="Valladolid">Valladolid</option>
                            <option value="Zamora">Zamora</option>
                            <option value="Albacete">Albacete</option>
                            <option value="Ciudad Real">Ciudad Real</option>
                            <option value="Cuenca">Cuenca</option>
                            <option value="Guadalajara">Guadalajara</option>
                            <option value="Toledo">Toledo</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Gerona">Gerona</option>
                            <option value="Lérida">Lérida</option>
                            <option value="Tarragona">Tarragona</option>
                            <option value="Alicante">Alicante</option>
                            <option value="Castellón">Castellón</option>
                            <option value="Valencia">Valencia</option>
                            <option value="Badajoz">Badajoz</option>
                            <option value="Cáceres">Cáceres</option>
                            <option value="A Coruña">A Coruña</option>
                            <option value="Lugo">Lugo</option>
                            <option value="Orense">Orense</option>
                            <option value="Pontevedra">Pontevedra</option>
                            <option value="Madrid">Madrid</option>
                            <option value="Murcia">Murcia</option>
                            <option value="Navarra">Navarra</option>
                            <option value="Álava">Álava</option>
                            <option value="Guipúzcoa">Guipúzcoa</option>
                            <option value="Vizcaya">Vizcaya</option>
                            <option value="La Rioja">La Rioja</option>
                        </select>
                   
                    </fieldset>

                    <fieldset id="form-height-file-card">
                        <label for="height">ALTURA (0.0)</label>
                        <input type="text" name="height" id="height-file-card"  />

                       
                    </fieldset>

                    <fieldset id="form-weight-file-card">
                        <label for="weight">PESO (00)</label>
                        <input type="text" name="weight" id="weight-file-card"  />

  
                    </fieldset>

                    <fieldset id="form-team-file-card">
                        <label for="team">EQUIPO ACTUAL</label>
                        <input type="text" name="team" id="team-file-card"  />

                      
                    </fieldset>

                    <fieldset id="form-demarcation-file-card">
                        <label for="demarcation">DEMARCACIÓN</label>

                        <select name="demarcation" id="demarcation-file-card"  >
                            <option value="">--</option>
                            <option value="Portero">Portero</option>
                            <option value="Lateral Derecho">Lateral Derecho</option>
                            <option value="Lateral Izquierdo">Lateral Izquierdo</option>
                            <option value="Defensa Central">Defensa Central</option>
                            <option value="Libero">Libero</option>
                            <option value="Medio Centro Defensivo">Medio Centro Defensivo</option>
                            <option value="Medio Centro">Medio Centro</option>
                            <option value="Medio Centro Ofensivo">Medio Centro Ofensivo</option>
                            <option value="Interior Derecho">Interior Derecho</option>
                            <option value="Media Punta">Media Punta</option>
                            <option value="Extremo Derecho">Extremo Derecho</option>
                            <option value="Extremo Izquierdo">Extremo Izquierdo</option>
                            <option value="Delantero Centro">Delantero Centro</option>
                            <option value="Segundo Delantero">Segundo Delantero</option>
                        </select>
                     
                    </fieldset>

                    <fieldset id="form-leg-file-card">
                        <label for="leg">MEJOR PIERNA</label>

                        <select name="best_leg" id="pierna-ficha"  >
                            <option value="">--</option>
                            <option value="Derecha">Derecha</option>
                            <option value="Izquierda">Izquierda</option>
                        </select>
                    
                    </fieldset>

                    

                <section className="enter">

                    <button id="button-enter-login" type="submit">
                        ENVIAR
                    </button>
            
                </section>
                </form>
            </section>
            

            <Footer />
        </React.Fragment>
    )
}

export { FileCard };
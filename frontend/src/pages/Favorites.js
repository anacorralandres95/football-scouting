import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFavorites } from "../http/VideosService";
import { useAuth } from "../shared/context/auth-context";
import { FavoritesList } from "../components/FavoritesList";
import { Faqs } from "../components/Faqs.js";
import { HeaderUser } from "../components/HeaderUser.js";
import search from "../assets/icons/search.png";
import thumbnail from "../assets/img/player.png";
import close from "../assets/icons/close.png";
import "../css/dashboard.css";


function FavoritesReducer(state, action) {
    switch (action.type) {
      case "GET_FAVORITES_SUCCESS":
        return { ...state, favorites: action.initialFavorites };
      
      case "SELECT_FAVORITE":
        return {
          ...state,
          selectedFavorite: action.index
        };

        // case "TOGGLE_VIDEO":
        //     return {
        //       ...state,
        //       isVideoOpened: !state.isVideoOpened
        //     };
     
      default:
        return state;
    }
  }

function Favorites () {
    const { user } = useAuth();

    const [state, dispatch] = useReducer(FavoritesReducer, {
        favorites: [],
        selectedFavorite: null
        // isChallengeOpened: false
    });


    
    useEffect(() => {
        getFavorites().then(response => {
            console.log(response);
            dispatch({ 
                type: "GET_FAVORITES_SUCCESS", initialFavorites: response.data.data 
            });
        });
        }, []);

        
        
        const selectFavorite = selectedIndex => {
            dispatch({ type: "SELECT_FAVORITE", index: selectedIndex });
        };
        
        const initialFavorites = state.favorites;
        console.log(initialFavorites);


    return (
        <React.Fragment>
            <HeaderUser />
            <Faqs />

            <section className="main-page-grid">
                <section className="filters">
                    <form id="filters">
                        <fieldset>
                            <img src={search} alt="" />
                            <input type="text" placeholder="Search" id="search" />
                         </fieldset>
          
                        <Link to="/video/favorites" className="link">FAVORITOS</Link>
                        { user.user_type === "Padre" &&
                        <Link to="/video/my-videos" className="link">MIS VÍDEOS</Link>
                        }

                        <h1>FILTROS</h1>

                        <fieldset id="community-fieldset">
                            <label for="community-filter">COMUNIDAD AUTÓNOMA</label>
                            <select name="community-filter" id="community-filter">
                                <option value="">--</option>
                                <option value="">Andalucia</option>
                                <option value="">Aragón</option>
                                <option value="">Asturias</option>
                                <option value="">Islas Baleares</option>
                                <option value="">Canarias</option>
                                <option value="">Cantabria</option>
                                <option value="">Castilla y León</option>
                                <option value="">Castilla La Mancha</option>
                                <option value="">Cataluña</option>
                                <option value="">Comunidad Valenciana</option>
                                <option value="">Extremadura</option>
                                <option value="">Galicia</option>
                                <option value="">Madrid</option>
                                <option value="">Murcia</option>
                                <option value="">Navarra</option>
                                <option value="">País Vasco</option>
                                <option value="">La Rioja</option>
                            </select>
                        </fieldset>

                        <fieldset id="province-fieldset">
                            <label for="province-filter">PROVINCIA</label>
                            <select name="province-filter" id="province-filter">
                                <option value="">--</option>
                                <option value="">Almería</option>
                                <option value="">Cádiz</option>
                                <option value="">Córdoba</option>
                                <option value="">Granada</option>
                                <option value="">Huelva</option>
                                <option value="">Jaén</option>
                                <option value="">Málaga</option>
                                <option value="">Sevilla</option>
                                <option value="">Huesca</option>
                                <option value="">Teruel</option>
                                <option value="">Zaragoza</option>
                                <option value="">Asturias</option>
                                <option value="">Islas Baleares</option>
                                <option value="">Las Palmas</option>
                                <option value="">S.Cruz de Tenerife</option>
                                <option value="">Cantabria</option>
                                <option value="">Ávila</option>
                                <option value="">Burgos</option>
                                <option value="">León</option>
                                <option value="">Palencia</option>
                                <option value="">Salamanca</option>
                                <option value="">Segovia</option>
                                <option value="">Soria</option>
                                <option value="">Valladolid</option>
                                <option value="">Zamora</option>
                                <option value="">Albacete</option>
                                <option value="">Ciudad Real</option>
                                <option value="">Cuenca</option>
                                <option value="">Guadalajara</option>
                                <option value="">Toledo</option>
                                <option value="">Barcelona</option>
                                <option value="">Gerona</option>
                                <option value="">Lérida</option>
                                <option value="">Tarragona</option>
                                <option value="">Alicante</option>
                                <option value="">Castellón</option>
                                <option value="">Valencia</option>
                                <option value="">Badajoz</option>
                                <option value="">Cáceres</option>
                                <option value="">A Coruña</option>
                                <option value="">Lugo</option>
                                <option value="">Orense</option>
                                <option value="">Pontevedra</option>
                                <option value="">Madrid</option>
                                <option value="">Murcia</option>
                                <option value="">Navarra</option>
                                <option value="">Álava</option>
                                <option value="">Guipúzcoa</option>
                                <option value="">Vizcaya</option>
                                <option value="">La Rioja</option>
                            </select>
                        </fieldset>

                        <fieldset id="age-fieldset">
                            <label for="age-filter">EDAD</label>
                            <input className="range-age-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-age-filter">0</a>
                        </fieldset>

                        <fieldset id="gender-fieldset">
                            <label for="gender-filter">SEXO</label>
                            <select name="gender-filter" id="gender-filter">
                                <option value="">--</option>
                                <option value="">Niño</option>
                                <option value="">Niña</option>
                                <option value="">Otro</option>
                            </select>
                        </fieldset>
          

                        <fieldset id="height-fieldset">
                            <label for="height-filter">ALTURA</label>
                            <input className="range-height-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-height-filter">0</a>
                        </fieldset>

                        <fieldset id="weight-fieldset">
                            <label for="weight-filter">PESO</label>
                            <input className="range-weight-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-weight-filter">0</a>
                        </fieldset>

                        <fieldset id="demarcation-fieldset">
                            <label for="demarcation-filter">DEMARCACIÓN</label>
                            <select name="demarcation-filter" id="demarcation-filter">
                                <option value="">--</option>
                                <option value="">Portero</option>
                                <option value="">Lateral Derecho</option>
                                <option value="">Lateral Izquierdo</option>
                                <option value="">Defensa Central</option>
                                <option value="">Libero</option>
                                <option value="">Medio Centro Defensivo</option>
                                <option value="">Medio Centro</option>
                                <option value="">Medio Centro Ofensivo</option>
                                <option value="">Interior Derecho</option>
                                <option value="">Media Punta</option>
                                <option value="">Extremo Derecho</option>
                                <option value="">Extremo Izquierdo</option>
                                <option value="">Delantero Centro</option>
                                <option value="">Segundo Delantero</option>
                            </select>
                        </fieldset>

                        <fieldset id="leg-fieldset">
                            <label for="leg-filter">MEJOR PIERNA</label>
                            <select name="leg-filter" id="leg-filter">
                                <option value="">--</option>
                                <option value="">Derecha</option>
                                <option value="">Izquierda</option>
                            </select>
                        </fieldset>


                        <h1>VALORACIÓN</h1>

                        <section className="rate">
                            <label className="globalpuntuation">PUNTUACIÓN GLOBAL</label>

                            <section className="star">

                                <input id="star5" type="radio" name="rate" value="5" />
                                <label for="star5">✹ </label>

                                <input id="star4" type="radio" name="rate" value="4" />
                                <label for="star4">✹ </label>

                                <input id="star3" type="radio" name="rate" value="3" />
                                <label for="star3">✹ </label>

                                <input id="star2" type="radio" name="rate" value="2" />
                                <label for="star2">✹ </label>

                                <input id="star1" type="radio" name="rate" value="1" />
                                <label for="star1">✹ </label>
                                
                                <input id="star0" type="radio" name="rate" value="0" />
                                <label for="star0"></label>
                            </section>
                        </section>


                        <fieldset id="strenght-fieldset">
                            <label for="strenght-filter">FUERZA</label>
                            <input className="range-strenght-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-strenght-filter">0</a>
                        </fieldset>

                        <fieldset id="velocity-fieldset">
                            <label for="velocity-filter">VELOCIDAD</label>
                            <input className="range-velocity-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-velocity-filter">0</a>
                        </fieldset>

                        <fieldset id="technique-fieldset">
                            <label for="technique-filter">TÉCNICA</label>
                            <input className="range-technique-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-technique-filter">0</a>
                        </fieldset>

                        <fieldset id="ball-hit-fieldset">
                            <label for="ball-hit-filter">GOLPE DE BALÓN</label>
                            <input className="range-ball-hit-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-ball-hit-filter">0</a>
                        </fieldset>

                        <fieldset id="ball-stop-fieldset">
                            <label for="ball-stop-filter">PARADA</label>
                            <input className="range-ball-stop-filter" type="range" value="0" min="0" max="16" />
                            <a id="value-ball-stop-filter">0</a>
                        </fieldset>

                        <section className="apply">

                            <button id="button-enter-login">
                                <a href="">APLICAR</a>
                            </button>
                
                        </section>
 
                    </form>
                </section>

            <section className="videos">

                <section id="ranking">

                <FavoritesList
                      favorites={initialFavorites}
                      selectedIndex={state.selectedFavorite}
                      onFavoriteSelected={i => {
                        selectFavorite(i);
                      }}
                    
                      />
    </section>

</section>
</section>
        </React.Fragment>
    )
}

export { Favorites };
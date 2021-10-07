import React, { useReducer, useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
import { getVideos } from "../http/VideosService";
import { AllVideosList } from "../components/AllVideosList";
import { Faqs } from "../components/Faqs.js";
import { HeaderUser } from "../components/HeaderUser.js";
import search from "../assets/icons/search.png";
import "../css/dashboard.css";

function VideosReducer(state, action) {
  switch (action.type) {
    case "GET_VIDEOS_SUCCESS":
      return {
        ...state,
        videos: action.initialVideos,
        filters: action.filters,
      };

    case "SELECT_VIDEO":
      return {
        ...state,
        selectedVideo: action.index,
      };

    case "TOGGLE_VIDEO":
      return {
        ...state,
        isVideoOpened: !state.isVideoOpened,
      };

    default:
      return state;
  }
}

function Dashboard() {
  const { user } = useAuth();

  const [filters, setFilters] = useState({
    filterSearch: "",
    filterComunity: "",
    filterProvince: "",
    filterAge: "",
    filterGender: "",
    filterHeight: "",
    filterWeight: "",
    filterDemarcation: "",
    filterBestLeg: "",
  });

  const [state, dispatch] = useReducer(VideosReducer, {
    videos: [],
    selectedVideo: null,
    isVideoOpened: false,
  });

  useEffect(() => {
    getVideos(filters).then((response) => {
      dispatch({
        type: "GET_VIDEOS_SUCCESS",
        initialVideos: response.data.data,
        filters: response.data.filters,
      });
    });
  }, [filters]);

  const selectVideo = (selectedIndex) => {
    dispatch({ type: "SELECT_VIDEO", index: selectedIndex });
  };

  const changeFilters = (e) => {
    e.preventDefault();
  };

  const filter0 = (e) => {
    setFilters({ ...filters, filterSearch: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterSearch,
    });
  };

  const filter1 = (e) => {
    setFilters({ ...filters, filterComunity: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterComunity,
    });
  };

  const filter2 = (e) => {
    setFilters({ ...filters, filterProvince: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterProvince,
    });
  };

  const filter4 = (e) => {
    setFilters({ ...filters, filterGender: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterGender,
    });
  };

  const filter5 = (e) => {
    setFilters({ ...filters, filterHeight: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterHeight,
    });
  };

  const filter6 = (e) => {
    setFilters({ ...filters, filterWeight: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterWeight,
    });
  };

  const filter7 = (e) => {
    setFilters({ ...filters, filterDemarcation: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterDemarcation,
    });
  };

  const filter8 = (e) => {
    setFilters({ ...filters, filterBestLeg: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters.filterBestLeg,
    });
  };

  const initialVideos = useMemo(() => {
    return state.videos.filter((video) => {
      if (
        filters.filterComunity === "" &&
        filters.filterBestLeg === "" &&
        filters.filterDemarcation === "" &&
        filters.filterGender === "" &&
        filters.filterHeight === "" &&
        filters.filterWeight === "" &&
        filters.filterProvince === "" &&
        filters.filterSearch === ""
      ) {
        return true;
      }

      if (video.gender === filters.filterSearch) {
        return state.videos;
      }

      if (video.comunity === filters.filterSearch) {
        return state.videos;
      }

      if (video.province === filters.filterSearch) {
        return state.videos;
      }

      if (video.height === filters.filterSearch) {
        return state.videos;
      }

      if (video.weight === filters.filterSearch) {
        return state.videos;
      }

      if (video.demarcation === filters.filterSearch) {
        return state.videos;
      }

      if (video.best_leg === filters.filterSearch) {
        return state.videos;
      }

      if (video.comunity === filters.filterComunity) {
        return state.videos;
      }

      if (video.province === filters.filterProvince) {
        return state.videos;
      }

      if (video.age === filters.filterAge) {
        return state.videos;
      }

      if (video.gender === filters.filterGender) {
        return state.videos;
      } else if (video.height === filters.filterHeight) {
        return state.videos;
      } else if (video.weight === filters.filterWeight) {
        return state.videos;
      } else if (video.demarcation === filters.filterDemarcation) {
        return state.videos;
      } else if (video.best_leg === filters.filterBestLeg) {
        return state.videos;
      }

      return true;
    });
  }, [state.videos, filters]);

  return (
    <React.Fragment>
      <HeaderUser />
      <Faqs />

      <section className="main-page-grid">
        <section className="filters">
          <form id="filters" onSubmit={changeFilters}>
            <fieldset>
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="Search"
                id="search"
                value={filters.filterSearch}
                onChange={filter0}
              />
            </fieldset>

            <Link to="/video/favorites" className="link">
              FAVORITOS
            </Link>

            {user.user_type === "Padre" && (
              <Link to="/video/my-videos" className="link">
                MIS VÍDEOS
              </Link>
            )}

            <h1>FILTROS</h1>

            <fieldset id="community-fieldset">
              <label for="community-filter">COMUNIDAD AUTÓNOMA</label>
              <select
                name="community-filter"
                id="community-filter"
                onChange={filter1}
              >
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
                <option value="Comunidad Valenciana">
                  Comunidad Valenciana
                </option>
                <option value="Extremadura">Extremadura</option>
                <option value="Galicia">Galicia</option>
                <option value="Madrid">Madrid</option>
                <option value="Murcia">Murcia</option>
                <option value="Navarra">Navarra</option>
                <option value="País Vasco">País Vasco</option>
                <option value="La Rioja">La Rioja</option>
              </select>
            </fieldset>

            <fieldset id="province-fieldset">
              <label for="province-filter">PROVINCIA</label>
              <select
                name="province-filter"
                id="province-filter"
                onChange={filter2}
              >
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

            <fieldset id="gender-fieldset">
              <label for="gender-filter">SEXO</label>
              <select
                name="gender-filter"
                id="gender-filter"
                onChange={filter4}
              >
                <option value="">--</option>
                <option value="Niño">Niño</option>
                <option value="Niña">Niña</option>
                <option value="Otro">Otro</option>
              </select>
            </fieldset>

            <fieldset id="height-fieldset">
              <label for="height-filter">ALTURA</label>
              <input
                className="range-height-filter"
                type="range"
                min="0.50"
                max="2.00"
                step="0.10"
                onChange={filter5}
              />
              <a id="value-height-filter">{filters.filterHeight}</a>
            </fieldset>

            <fieldset id="weight-fieldset">
              <label for="weight-filter">PESO</label>
              <input
                className="range-weight-filter"
                type="range"
                min="25"
                max="90"
                step="5"
                onChange={filter6}
              />
              <a id="value-weight-filter">{filters.filterWeight}</a>
            </fieldset>

            <fieldset id="demarcation-fieldset">
              <label for="demarcation-filter">DEMARCACIÓN</label>
              <select
                name="demarcation-filter"
                id="demarcation-filter"
                onChange={filter7}
              >
                <option value="">--</option>
                <option value="Portero">Portero</option>
                <option value="Lateral Derecho">Lateral Derecho</option>
                <option value="Lateral Izquierdo">Lateral Izquierdo</option>
                <option value="Defensa Central">Defensa Central</option>
                <option value="Libero">Libero</option>
                <option value="Medio Centro Defensivo">
                  Medio Centro Defensivo
                </option>
                <option value="Medio Centro">Medio Centro</option>
                <option value="Medio Centro Ofensivo">
                  Medio Centro Ofensivo
                </option>
                <option value="Interior Derecho">Interior Derecho</option>
                <option value="Media Punta">Media Punta</option>
                <option value="Extremo Derecho">Extremo Derecho</option>
                <option value="Extremo Izquierdo">Extremo Izquierdo</option>
                <option value="Delantero Centro">Delantero Centro</option>
                <option value="Segundo Delantero">Segundo Delantero</option>
              </select>
            </fieldset>

            <fieldset id="leg-fieldset">
              <label for="leg-filter">MEJOR PIERNA</label>
              <select name="leg-filter" id="leg-filter" onChange={filter8}>
                <option value="">--</option>
                <option value="Derecha">Derecha</option>
                <option value="Izquierda">Izquierda</option>
              </select>
            </fieldset>
          </form>
        </section>

        <section className="videos">
          <AllVideosList
            videos={initialVideos}
            onVideoSelected={(i) => {
              selectVideo(i);
              dispatch({ type: "TOGGLE_VIDEO" });
            }}
          />
        </section>
      </section>
    </React.Fragment>
  );
}

export { Dashboard };

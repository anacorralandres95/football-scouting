import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import { getMyVideos } from "../../../http/VideosService";
import { Faqs } from "../../../components/Faqs.js";
import { HeaderUser } from "../../../components/HeaderUser.js";
import { useAuth } from "../../../shared/context/auth-context";
import search from "../../../assets/icons/search.png";
import { AllVideosList } from "../../../components/all-videos-list/AllVideosList";
import { MyVideosReducer } from "../../../reducers/MyVideosReducer";
import { useFilters } from "../useFilters";
import { Filters } from "../../../components/filters/Filters";
import "../dashboard.css";
import { Footer } from "../../../components/Footer";

function MyVideos() {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(MyVideosReducer, {
    videos: [],
    selectedVideo: null,
    isVideoOpened: false,
  });

  const { filters, setFilters, initialVideos } = useFilters({ state });

  useEffect(() => {
    getMyVideos().then((response) => {
      dispatch({
        type: "GET_MYVIDEOS_SUCCESS",
        initialMyVideos: response.data.data,
        filters: response.data.filters,
      });
    });
  }, []);

  const selectMyVideo = (selectedIndex) => {
    dispatch({ type: "SELECT_MYVIDEO", index: selectedIndex });
  };

  const changeFilters = (e) => {
    e.preventDefault();
  };

  const setFilter = (e, filter) => {
    setFilters({ ...filters, [filter]: e.target.value });
    dispatch({
      type: "GET_MYVIDEOS_SUCCESS",
      initialVideos: initialVideos,
      filters: filters[filter],
    });
  };

  return (
    <React.Fragment>
      <HeaderUser />
      <Faqs />

      <section className="main-page-grid">
        <section className="filters">
          <form id="filters" onSubmit={changeFilters}>
            <fieldset id="search-field">
              <img src={search} alt="" />
              <input
                type="text"
                placeholder="Search"
                id="search"
                value={filters.filterSearch}
                onChange={(e) => setFilter(e, "filterSearch")}
              />
            </fieldset>

            <Link to="/video/favorites" className="link">
              {formatMessage("Favoritos")}
            </Link>

            {user?.user_type === "Padre" && (
              <Link to="/video/my-videos" className="link" id="my-videos">
                {formatMessage("Mis vídeos")}
              </Link>
            )}

            <Filters setFilter={setFilter} filters={filters} />
          </form>
        </section>

        <section className="videos">
          <section id="ranking">
            <AllVideosList
              videos={initialVideos}
              onMyVideoSelected={(i) => {
                selectMyVideo(i);
                dispatch({ type: "TOGGLE_MYVIDEO" });
              }}
              isDashboard={false}
            />
          </section>
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export { MyVideos };

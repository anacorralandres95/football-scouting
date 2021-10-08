import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import { useAuth } from "../../shared/context/auth-context";
import { getVideos } from "../../http/VideosService";
import { AllVideosList } from "../../components/all-videos-list/AllVideosList";
import { Faqs } from "../../components/Faqs.js";
import { HeaderUser } from "../../components/HeaderUser.js";
import search from "../../assets/icons/search.png";
import { VideosReducer } from "../../reducers/VideosReducer";
import { Filters } from "../../components/filters/Filters";
import { useFilters } from "./useFilters";
import "./dashboard.css";
import { Footer } from "../../components/Footer";

function Dashboard() {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(VideosReducer, {
    videos: [],
    selectedVideo: null,
    isVideoOpened: false,
  });

  const { filters, setFilters, initialVideos } = useFilters({ state });

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

  const setFilter = (e, filter) => {
    setFilters({ ...filters, [filter]: e.target.value });
    dispatch({
      type: "GET_VIDEOS_SUCCESS",
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
              <Link to="/video/my-videos" className="link">
                {formatMessage("Mis vídeos")}
              </Link>
            )}

            <Filters setFilter={setFilter} filters={filters} />
          </form>
        </section>

        <section className="videos">
          <AllVideosList
            videos={initialVideos}
            onVideoSelected={(i) => {
              selectVideo(i);
              dispatch({ type: "TOGGLE_VIDEO" });
            }}
            isDashboard={true}
          />
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export { Dashboard };

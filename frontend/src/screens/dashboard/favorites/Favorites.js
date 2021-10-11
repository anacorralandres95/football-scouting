import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import formatMessage from "format-message";
import { getFavorites } from "../../../http/VideosService";
import { useAuth } from "../../../shared/context/auth-context";
import { Faqs } from "../../../components/faqs/Faqs.js";
import { HeaderUser } from "../../../components/headers/HeaderUser.js";
import search from "../../../assets/icons/search.png";
import { FavoritesReducer } from "../../../reducers/FavoritesReducer";
import { useFilters } from "../useFilters";
import { Filters } from "../../../components/filters/Filters";
import { AllVideosList } from "../../../components/all-videos-list/AllVideosList";
import { Footer } from "../../../components/footer/Footer";
import "../dashboard.css";

function Favorites() {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(FavoritesReducer, {
    videos: [],
    selectedVideo: null,
  });

  const { filters, setFilters, initialVideos } = useFilters({ state });

  useEffect(() => {
    getFavorites().then((response) => {
      dispatch({
        type: "GET_FAVORITES_SUCCESS",
        initialFavorites: response.data.data,
        filters: response.data.filters,
      });
    });
  }, [filters]);

  const selectFavorite = (selectedIndex) => {
    dispatch({ type: "SELECT_FAVORITE", index: selectedIndex });
  };

  const changeFilters = (e) => {
    e.preventDefault();
  };

  const setFilter = (e, filter) => {
    setFilters({ ...filters, [filter]: e.target.value });
    dispatch({
      type: "GET_FAVORITES_SUCCESS",
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

            <Link to="/video/favorites" className="link" id="favorites">
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
              selectFavorite(i);
              dispatch({ type: "TOGGLE_FAVORITE" });
            }}
            isFavorites={true}
          />
        </section>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export { Favorites };

import { useEffect, useMemo, useState } from "react";

export const useFilters = ({ state }) => {
  const initialState = {
    filterSearch: "",
    filterComunity: "",
    filterProvince: "",
    filterAge: "",
    filterGender: "",
    filterHeight: "",
    filterWeight: "",
    filterDemarcation: "",
    filterBestLeg: "",
  };
  const [filters, setFilters] = useState(initialState);

  useEffect(() => {
    setFilters(initialState);

    return () => {
      setFilters(initialState);
    };
  }, []);

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

  return {
    filters,
    setFilters,
    initialVideos,
  };
};

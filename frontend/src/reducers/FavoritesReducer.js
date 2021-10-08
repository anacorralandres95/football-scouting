export function FavoritesReducer(state, action) {
  switch (action.type) {
    case "GET_FAVORITES_SUCCESS":
      return {
        ...state,
        videos: action.initialVideos,
        filters: action.filters,
      };

    case "SELECT_FAVORITE":
      return {
        ...state,
        selectedVideo: action.index,
      };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        isVideoOpened: !state.isVideoOpened,
      };

    default:
      return state;
  }
}

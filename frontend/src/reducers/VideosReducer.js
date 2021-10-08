export function VideosReducer(state, action) {
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

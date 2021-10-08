export function MyVideosReducer(state, action) {
  switch (action.type) {
    case "GET_MYVIDEOS_SUCCESS":
      return {
        ...state,
        videos: action.initialMyVideos,
        filters: action.filters,
      };

    case "SELECT_MYVIDEO":
      return {
        ...state,
        selectedVideo: action.index,
      };

    case "TOGGLE_MYVIDEO":
      return {
        ...state,
        isVideoOpened: !state.isVideoOpened,
      };

    default:
      return state;
  }
}

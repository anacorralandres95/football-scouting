export function VideoReducer(state, action) {
  switch (action.type) {
    case "GET_VIDEO_SUCCESS":
      return { ...state, video: action.initialVideo };

    default:
      return state;
  }
}

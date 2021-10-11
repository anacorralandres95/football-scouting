export function RelatedReducer(state, action) {
  switch (action.type) {
    case "GET_RELATED_SUCCESS":
      return { ...state, related: action.initialRelated };

    case "SELECT_RELATED":
      return {
        ...state,
        selectedRelated: action.index,
      };

    default:
      return state;
  }
}

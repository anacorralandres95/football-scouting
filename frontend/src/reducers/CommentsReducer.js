export function CommentsReducer(state, action) {
  switch (action.type) {
    case "GET_COMMENTS_SUCCESS":
      return { ...state, comments: action.initialComments };

    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.comment_id !== action.comment_id
        ),
      };

    default:
      return state;
  }
}

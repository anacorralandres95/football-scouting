import React, { useReducer, useEffect } from "react";
import { getComments } from "../http/VideosService";
import { deleteComment } from "../http/VideosService";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
import trash from "../assets/icons/trash.png";

function CommentsReducer(state, action) {
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

function Comments() {
  const params = useParams();
  const { user } = useAuth();
  const history = useHistory();

  const [state, dispatch] = useReducer(CommentsReducer, {
    comments: [],
    // selectedComment: null
    // isChallengeOpened: false
  });

  useEffect(() => {
    getComments(params.video_id).then((response) => {
      dispatch({
        type: "GET_COMMENTS_SUCCESS",
        initialComments: response.data.data,
      });
    });
  }, []);

  const deleteCommentClick = async (video_id, comment_id) => {
    await deleteComment(params.video_id, params.comment_id);
    dispatch({ type: "DELETE_COMMENT", video_id, comment_id });
  };

  return (
    <section id="comments">
      <ul>
        {state.comments.map((Comment, i) => (
          <li key={Comment.comment_id}>
            <a href="date" id="date-comment">
              {Comment.created_at.substring(0, 16).replace("T", " ")}
            </a>
            <a href="comment" id="comment-video">
              {Comment.content}
            </a>
            {user.user_id === Comment.user_id && (
              <button
                id="delete-comment"
                onClick={(e) => {
                  e.preventDefault();
                  history.push(
                    `/video/${Comment.video_id}/${Comment.comment_id}`
                  );
                  params.comment_id = Comment.comment_id;
                  deleteCommentClick(Comment.comment_id);
                  window.location.reload();
                }}
              >
                <img src={trash} alt="borrar" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export { Comments };

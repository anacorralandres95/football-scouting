import React, { useReducer, useEffect } from "react";
import { getComments } from "../http/VideosService";
import { deleteComment } from "../http/VideosService";
import { useParams, useHistory } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
import trash from "../assets/icons/trash.png";



function CommentsReducer (state, action) {
    switch (action.type) {
      case "GET_COMMENTS_SUCCESS":
        return { ...state, comments: action.initialComments };

        case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(comment => comment.comment_id !== action.comment_id)
      };
      
    //   case "SELECT_COMMENT":
    //     return {
    //       ...state,
    //       selectedRelated: action.index
    //     };

        // case "TOGGLE_VIDEO":
        //     return {
        //       ...state,
        //       isVideoOpened: !state.isVideoOpened
        //     };
     
      default:
        return state;
    }
  }
  
function Comments () {
    const params = useParams();
    const { user } = useAuth();
    const history = useHistory();



      const [state, dispatch] = useReducer(CommentsReducer, {
        comments: [],
        // selectedComment: null
        // isChallengeOpened: false
    });


    
    useEffect(() => {
        getComments(params.video_id).then(response => {
            console.log(response);
            dispatch({ 
                type: "GET_COMMENTS_SUCCESS", initialComments: response.data.data 
            });
        });
        }, []);


    //  async function deleteCommentClick () {
    //         console.log("CLICK")
    //             // history.push(`/video/${params.video_id}/${initialComments.comment_id}`);
    //             console.log("PV", params.video_id);
    //             console.log("PC", params.comment_id);
    //             await deleteComment(params.comment_id);
    //             window.alert("Comentario borrado");
            
    //         // catch (e){
    //         //     window.alert("Error");
    //         // }
    //         // dispatch({ type: "CREATE_NOTE", note: response.data });
    //         // selectNote(0);
    //       };

        
        
        // const selectRelated = selectedIndex => {
        //     dispatch({ type: "SELECT_RELATED", index: selectedIndex });
        // };
        
        const initialComments = state.comments;
        console.log(initialComments);

        // var commentDate = initialComments.created_at;

        // var commentDate = new Date().toISOString().substring(0, 16).replace("T", " ");

        const deleteCommentClick = async (video_id , comment_id) => {
            await deleteComment(params.video_id, params.comment_id);
            dispatch({ type: "DELETE_COMMENT", video_id, comment_id});
        }



    return(
        <section id="comments">
                <ul>

                {state.comments.map((Comment, i) => (
                                    <li key={Comment.comment_id}>
                                        <a href="" id="date-comment">{Comment.created_at.substring(0,16).replace("T", " ")}</a>
                                        <a href="" id="comment-video">{Comment.content}</a>
                                        {user.user_id === Comment.user_id && <button id="delete-comment" 
                                        onClick={e => {
                                            e.preventDefault();
                                            history.push(`/video/${Comment.video_id}/${Comment.comment_id}`);
                                            params.comment_id = Comment.comment_id;
                                            console.log("PC", params.comment_id);
                                            deleteCommentClick(Comment.comment_id);
                                            window.location.reload();
                                        }}
                                        // onClick={e => {
                                        //     e.preventDefault();
                                        //     deleteCommentClick(Comment.comment_id)
                                        // }}
                                        ><img src={trash} alt="borrar" /></button>}
                                    </li>
                                    ))}
                                </ul>
                            </section>


    )
}


export { Comments };


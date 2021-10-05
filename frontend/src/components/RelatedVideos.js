import React, { useReducer, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getRelatedVideos } from "../http/VideosService";
import { useParams } from "react-router-dom";



function RelatedReducer (state, action) {
    switch (action.type) {
      case "GET_RELATED_SUCCESS":
        return { ...state, related: action.initialRelated };
      
      case "SELECT_RELATED":
        return {
          ...state,
          selectedRelated: action.index
        };

        // case "TOGGLE_VIDEO":
        //     return {
        //       ...state,
        //       isVideoOpened: !state.isVideoOpened
        //     };
     
      default:
        return state;
    }
  }


function RelatedVideos () {
    const history = useHistory();
    const params = useParams();


    const [state, dispatch] = useReducer(RelatedReducer, {
        related: [],
        selectedRelated: null
        // isChallengeOpened: false
    });


    
    useEffect(() => {
        getRelatedVideos(params.video_id).then(response => {
            console.log(response);
            dispatch({ 
                type: "GET_RELATED_SUCCESS", initialRelated: response.data.data 
            });
        });
        }, []);

        
        
        const selectRelated = selectedIndex => {
            dispatch({ type: "SELECT_RELATED", index: selectedIndex });
        };
        
        const initialRelated = state.related;
        console.log(initialRelated);
        console.log(initialRelated.name);


    return (
       <React.Fragment>
        <ul>

        {state.related.map((Related, i) => (
                        <li className="video-player-related" key={Related.video_id}  
                            onClick={() => {
                                selectRelated(state.related[i]); 
                                console.log(state.related[i]);
                                history.push(`/video/${Related.video_id}`);
                                window.location.reload();
                                }}
                        >

                            <video src={Related.video_url} />                      

                            <span id="title-meta">
                                {Related.title || "Untitle video"}
                            </span>
                            <span id="user-meta">
                            {Related.name} {Related.surname1} {Related.surname2}
                            </span>
                            
                            <span id="date-meta">
                            {Related.team} · {Related.created_at.substring(0,16).replace("T", " ")}
                            </span>
                            {/* <img src={close} alt="" class="icon-close"></img> */}
                        
                    </li>
                    ))}
            
            {/* <li class="video-player-related">
            <img src={thumbnail} alt="thumbnail" id="thumbnail" />
            <span id="title-meta">Deportivo juvenil en Betanzos</span>
            <span id="user-meta">Joaquín Martínez</span>
            <span id="visualizations-meta">300 visualizaciones ·</span>
            <span id="date-meta">Hace 1 semana</span>
            </li> */}

    
        </ul>
        </React.Fragment>

        
    )
}

export { RelatedVideos };
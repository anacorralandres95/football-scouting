import React from "react";
import { useAuth } from "../shared/context/auth-context";
import { useHistory } from "react-router-dom";

function Loading() {
    return <p>Loading</p>
}

function AllVideosList ( {videos, selectedIndex, onVideoSelected }) {
    const history = useHistory();

    if (videos === undefined) return <Loading />

    if (videos === null) {
        return <div>Error</div>
    }



    return (
        <React.Fragment>
            <section id="ranking">

                <ul>

                    {videos.map((Video, i) => (
                        <li className="video-player" key={Video.video_id}  
                            onClick={() => {
                                onVideoSelected(videos[i]); 
                                history.push(`/video/${Video.video_id}`)
                                }}
                        >
                                    
                        {/* <img src={Video.video_url} alt="thumbnail" id="thumbnail" /> */}
                        <video src={Video.video_url} />                      
                        <span id="title-meta">
                            {Video.title || "Untitle video"}
                        </span>
                        <span id="user-meta">
                            {Video.name} {Video.surname1} {Video.surname2}
                        </span>
                        
                        <span id="date-meta">
                            {Video.team} · {Video.created_at.substring(0,16).replace("T", " ")}
                        </span>
                    </li>
    ))}
    
    
</ul>

</section>
        </React.Fragment>
    )

}


export { AllVideosList };
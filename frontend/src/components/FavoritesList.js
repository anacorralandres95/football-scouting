import React from "react";
import { useAuth } from "../shared/context/auth-context";
import { useHistory } from "react-router-dom";
import close from "../assets/icons/close.png";

function Loading() {
    return <p>Loading</p>
}

function FavoritesList ( {favorites, selectedIndex, onFavoriteSelected }) {
    const history = useHistory();

    if (favorites === undefined) return <Loading />

    if (favorites.length === 0) {
        return <h1 id="empty">Aún no has añadido ningún vídeo en tu lista de favoritos.</h1>
    }

    // console.log(selectedIndex)

    return (
        <React.Fragment>
                <ul>

                    {favorites.map((Favorite, i) => (
                        <li className="video-player" key={Favorite.video_id}  
                            onClick={() => {
                                onFavoriteSelected(favorites[i]); 
                                history.push(`/video/${Favorite.video_id}`)
                                }}
                        >

                            <video src={Favorite.video_url} />                      

                            <span id="title-meta">
                                {Favorite.title || "Untitle video"}
                            </span>
                            <span id="user-meta">
                            {Favorite.name} {Favorite.surname1} {Favorite.surname2}
                            </span>
                            
                            <span id="date-meta">
                            {Favorite.team} · {Favorite.created_at.substring(0,16).replace("T", " ")}
                            </span>
                            {/* <img src={close} alt="" class="icon-close"></img> */}
                        
                    </li>
    ))}
    
    
</ul>
        </React.Fragment>
    )

}


export { FavoritesList };



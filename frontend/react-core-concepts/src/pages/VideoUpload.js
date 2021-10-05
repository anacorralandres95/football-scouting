import React from "react";
import { createVideoPromise } from "../http/VideosService.js";
import { HeaderUser } from "../components/HeaderUser.js";
import { useHistory } from "react-router-dom";
import "../css/video-upload.css";
import { Faqs } from "../components/Faqs.js";
import upload from "../assets/img/upload-video.png";

function VideoUpload () {

    const history = useHistory();

    const handleVideoUpload = e => {
        e.preventDefault();
        
    
    setTimeout(
    function createVideo() {
        const formVideo = document.getElementById('form-video');
        const formData = new FormData (formVideo);
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };
        history.push("/video/my-videos")
        return createVideoPromise(formData, config);
    }, 1000);

    }

    return (
        <React.Fragment>
            <HeaderUser />
            <Faqs />

            <section class="target-upload">
                <h1>SUBE TU VÍDEO A LA PLATAFORMA</h1>

                <form onSubmit={handleVideoUpload}  id="form-video">

                <img src={upload} alt="upload-video" id="img-upload" />
           
                <section class="upload">
                    <input type="file" name="video_url" id="upload-video" />
            
                    <label for="title">TÍTULO</label>
                    <input type="text" name="title" />
                    <label for="description">DESCRIPCIÓN</label>
                    <textarea name="description" id="video-description" cols="30" rows="10"></textarea>
                    <button type="submit" >
                    SUBIR VÍDEO
                    </button>
                    <span id="upload-meta">El formato debe de ser mp4 y el tamaño no debe superar los 10MB <br />El vídeo sólo se subirá si tienes todos los campos cubiertos <br /> Este proceso tardará unos minutos <br /> Te redireccionamos a tus vídeos donde lo encontrarás una vez el proceso termine</span>
                </section>
                </form>
            </section>

        </React.Fragment>
    )
}

export { VideoUpload };
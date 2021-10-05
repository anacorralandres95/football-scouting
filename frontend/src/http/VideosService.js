import axios from "axios";

export function createVideoPromise(formData, config) {
    return axios.post(`http://localhost:8000/api/video`, formData, config)
}

export function getVideos() {
    return axios.get(`http://localhost:8000/api/video`);
}

export function getFavorites() {
    return axios.get(`http://localhost:8000/api/video/favorites`);
}
export function getMyVideos() {
    return axios.get(`http://localhost:8000/api/video/my-videos`);
}


export function getVideo(video_id) {
    console.log("IDHTTP", video_id);
    return axios.get(`http://localhost:8000/api/video/${video_id}`);
}


export function deleteVideo(video_id) {
    return axios.delete(`http://localhost:8000/api/video/${video_id}`);
}

export function deleteFavorite(video_id) {
    return axios.delete(`http://localhost:8000/api/video/${video_id}/favorites`);
}

export function deleteComment(video_id, comment_id) {
    return axios.delete(`http://localhost:8000/api/video/${video_id}/${comment_id}`);
}


export function getRelatedVideos(video_id) {
    return axios.get(`http://localhost:8000/api/video/${video_id}/related`);
}

export function getComments(video_id) {
    return axios.get(`http://localhost:8000/api/video/${video_id}/comments`);
}

export function getRating(video_id) {
    return axios.get(`http://localhost:8000/api/video/${video_id}/rating`);
}

export function addFavorite(video_id) {
    return axios.post(`http://localhost:8000/api/video/${video_id}/favorite`);
}

export function addComment(video_id , content) {
    return axios.post(`http://localhost:8000/api/video/${video_id}/comment`, content);
}

export function addRating(video_id , rating) {
    return axios.post(`http://localhost:8000/api/video/${video_id}/rating`, rating);
}


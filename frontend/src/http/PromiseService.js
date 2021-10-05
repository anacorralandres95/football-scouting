import axios from "axios";

export function createPromise(formData, config) {
    return axios.post(`http://localhost:8000/api/promise`, formData, config)
}
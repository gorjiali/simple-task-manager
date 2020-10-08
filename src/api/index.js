import axios from "axios";

const api = axios.create({
    baseURL: 'api/',
});

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
}
)

export default api;
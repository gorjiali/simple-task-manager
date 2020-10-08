import api from '../';

function signIn(data) {
    return api.post('/login', data)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}


export default {
    signIn
}
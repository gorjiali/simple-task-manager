import api from '../';


function getAllTasks() {
    return api.get('/tasks')
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}

function addTask(data) {
    return api.post('/tasks', data)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}

function updateTask(data) {
    return api.patch('/tasks', data)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}


export default {
    getAllTasks,
    addTask,
    updateTask
}
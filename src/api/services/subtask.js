import api from '../';


function getSubtaskOfTask(taskId) {
    return api.get(`/subtasks/${taskId}`)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}

function addSubtask(data) {
    return api.post('/subtasks', data)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}

function updateSubtask(data) {
    return api.patch('/subtasks', data)
        .then(response => response.data)
        .catch(error => Promise.reject(error.response))
}


export default {
    getSubtaskOfTask,
    addSubtask,
    updateSubtask
}
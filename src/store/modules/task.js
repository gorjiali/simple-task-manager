import taskService from '@/api/services/task';

// ################################## state ############################################
const state = {
    all: null
};

// ################################## getters ############################################
const getters = {

};

// ################################## actions ############################################
const actions = {
    getAllTasks({ commit, dispatch }) {
        dispatch('global/changeSpinnerOverlayState', true, { root: true });
        return taskService.getAllTasks()
            .then(response => {
                commit('setAllTasks', response.tasks);
                dispatch('global/changeSpinnerOverlayState', false, { root: true });
            })
            .catch(error => alert(error.data.msg))
    },

    addTask({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            dispatch('global/changeSpinnerOverlayState', true, { root: true });
            return taskService.addTask(payload)
                .then(response => {
                    dispatch('global/changeSpinnerOverlayState', false, { root: true });
                    commit('setCreatedTask', response.task)
                    resolve(true);
                })
                .catch(error => alert(error.data.msg))
        })
    },

    updateTask({ commit, dispatch }, payload) {
        dispatch('global/changeSpinnerOverlayState', true, { root: true });
        return taskService.updateTask(payload)
            .then(response => {
                commit('updateTask', response.task);
                dispatch('global/changeSpinnerOverlayState', false, { root: true });
            })
            .catch(error => alert(error.data.msg))
    },
};

// ################################## mutations ############################################
const mutations = {
    setAllTasks(state, tasks) {
        state.all = tasks;
    },

    setCreatedTask(state, newTask) {
        state.all.push(newTask);
    },

    updateTask(state, updatedTask) {
        let allTasks = [...state.all]
        const objIndex = allTasks.findIndex((obj => obj.id == updatedTask.id));
        allTasks[objIndex] = updatedTask;
        state.all = allTasks;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
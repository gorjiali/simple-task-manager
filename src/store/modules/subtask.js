import subtaskService from '@/api/services/subtask';
import Vue from 'vue';

// ################################## state ############################################
const state = {
    all: {}
};

// ################################## getters ############################################
const getters = {
    subtaskOfTask: state => taskId => {
        return state.all[taskId];
    }
};

// ################################## actions ############################################
const actions = {
    getSubtasksOfTask({ commit }, taskId) {
        return subtaskService.getSubtaskOfTask(taskId)
            .then(response => {
                console.log(response)
                commit('setSubtasksOfTask', { taskId, subtasks: response.subtasks });
            })
    },

    addSubtask({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            dispatch('global/changeSpinnerOverlayState', true, { root: true });
            return subtaskService.addSubtask(payload)
                .then(response => {
                    dispatch('global/changeSpinnerOverlayState', false, { root: true });
                    commit('setCreatedSubtask', response.subtask);
                    resolve(true);
                })
                .catch(error => alert(error.data.msg))
        })
    },

    updateSubtask({ commit, dispatch }, payload) {
        dispatch('global/changeSpinnerOverlayState', true, { root: true });
        return subtaskService.updateSubtask(payload)
            .then(response => {
                dispatch('global/changeSpinnerOverlayState', false, { root: true });
                commit('updateSubtask', response.subtask);
            })
    },
};

// ################################## mutations ############################################
const mutations = {
    setSubtasksOfTask(state, { taskId, subtasks }) {
        Vue.set(state.all, taskId, subtasks);
    },

    updateSubtask(state, updatedSubtask) {
        let subtaskList = state.all[updatedSubtask.taskId];
        const objIndex = subtaskList.findIndex((obj => obj.id == updatedSubtask.id));
        subtaskList[objIndex].state = updatedSubtask.state
        Vue.set(state.all, updatedSubtask.taskId, subtaskList)
    },

    setCreatedSubtask(state, newSubtask) {
        const taskId = newSubtask.taskId;
        if (state.all[taskId]) {
            let newSubtaskList = state.all[taskId].push(newSubtask)
            Vue.set(state.all, newSubtask[taskId], newSubtaskList)
        } else {
            Vue.set(state.all, newSubtask[taskId], [newSubtask])
        }
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
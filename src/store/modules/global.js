
// ################################## state ############################################
const state = {
    spinnerOverlay: false
};

// ################################## getters ############################################
const getters = {
};

// ################################## actions ############################################
const actions = {
    changeSpinnerOverlayState({ commit }, payload) {
        commit('setSpinnerOverlayState', payload);
    }
};

// ################################## mutations ############################################
const mutations = {
    setSpinnerOverlayState(state, payload) {
        state.spinnerOverlay = payload;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
import authService from '../../api/services/auth';
import $router from '@/router'

// ################################## state ############################################
const state = {
    authenticatedUser: null
};

// ################################## getters ############################################
const getters = {

};

// ################################## actions ############################################
const actions = {
    signIn({ commit, dispatch }, payload) {
        authService.signIn(payload)
            .then(response => {
                commit("setAuthenticatedUser", response.user);
                $router.push({ name: "Dashboard" })
            })
            .catch(error => {
                alert(error.data.msg)
            })
    },

    logout({ commit }, payload) {
        commit('setAuthenticatedUser', null);
        $router.push({ name: 'Login' });
    }
};

// ################################## mutations ############################################
const mutations = {
    setAuthenticatedUser(state, user) {
        state.authenticatedUser = user;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
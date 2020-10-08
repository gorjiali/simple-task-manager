import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import task from './modules/task';
import subtask from './modules/subtask';
import auth from './modules/auth';
import global from './modules/global';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    task,
    subtask,
    auth,
    global
  }
})

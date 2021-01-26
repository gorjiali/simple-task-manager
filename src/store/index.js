import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workItems: [
      { id: uuidv4(), title: 'Refactor Livebook', state: 'new' },
      { id: uuidv4(), title: 'Login Page', state: 'active' },
      { id: uuidv4(), title: 'Dashboard Layout', state: 'pendedReview' },
      { id: uuidv4(), title: 'Users Page', state: 'resolved' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

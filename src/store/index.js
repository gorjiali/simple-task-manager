import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workItems: [
      { title: 'Refactor Livebook', state: 'new' },
      { title: 'Login Page', state: 'active' },
      { title: 'Dashboard Layout', state: 'pendedReview' },
      { title: 'Users Page', state: 'resolved' }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

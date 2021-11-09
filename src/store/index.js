import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workItems: []
  },

  mutations: {
    setWorkItemState(state, updatedWorkItem) {
      state.workItems.forEach(item => {
        if (item.id === updatedWorkItem.id) Vue.set(item, 'state', updatedWorkItem.state)
      })
    },
    setNewWorkItem(state, newWorkItem) {
      state.workItems.push({ ...newWorkItem, id: uuidv4() });
    },
    removeWorkItem(state, id) {
      state.workItems = state.workItems.filter(item => item.id !== id);
    }
  },

  actions: {
    changeWorkItemState({ commit }, updatedWorkItem) {
      commit('setWorkItemState', updatedWorkItem);
    },
    addNewWorkItem({ commit }, newWorkItem) {
      commit('setNewWorkItem', newWorkItem);
    },
    deleteWorkItem({ commit }, id) {
      commit('removeWorkItem', id);
    }
  },

  modules: {
  }
})

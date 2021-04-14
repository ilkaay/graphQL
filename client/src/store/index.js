import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarToggle: false,
  },
  getters: {
    getToggleSidebar(state) {
      return state.sidebarToggle;
    },
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarToggle = !state.sidebarToggle;
    },
  },
  actions: {
    toggleSidebar({ commit }) {
      commit("toggleSidebar");
    },
  },
  modules: {},
});

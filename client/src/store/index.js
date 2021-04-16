import Vue from "vue";
import Vuex from "vuex";

import { GET_POSTS, SIGNIN_USER, SIGNUP_USER } from "../queries";
import { defaultClient as apolloClient } from "../main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false,
  },

  getters: {
    posts(state) {
      return state.posts;
    },
    loading(state) {
      return state.loading;
    },
  },

  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },

  actions: {
    getPosts({ commit }) {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_POSTS,
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch((err) => {
          commit("setLoading", false);
          console.error(err);
        });
    },

    siginUser({ commit }) {
      apolloClient
        .query({
          query: SIGNIN_USER,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    signupUser({ commit }) {
      apolloClient
        .query({
          query: SIGNUP_USER,
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});

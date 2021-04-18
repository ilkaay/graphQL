import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@babel/polyfill";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap-vue/dist/bootstrap-vue.css";

import FormAlert from "../src/components/Shared/FormAlert.vue";

Vue.component("form-alert", FormAlert);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        console.log("[graphQLError]", err);
      }
    }
  },
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("getCurrentUser");
  },
}).$mount("#app");

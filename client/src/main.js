import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@babel/polyfill";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

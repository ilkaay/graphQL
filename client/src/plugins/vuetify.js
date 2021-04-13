import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        secondary: "#607d8b",
        accent: "#ff5722",
        error: "#f44336",
        warning: "#ff9800",
        info: "#00bcd4",
        success: "#4caf50",
        navbar: "#560bad",
        navbarHover: "#dee2ff",
      },
      dark: {
        primary: "#03a9f4",
        secondary: "#607d8b",
        accent: "#e91e63",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#4caf50",
      },
    },
  },
});

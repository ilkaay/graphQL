<template>
  <div style="position: absolute; top: 30%; left: 35%; right: 33%;">
    <div class="row">
      <div class="col-10 mb-5">
        <h1>Sign In</h1>
      </div>
    </div>

    <form name="form" class="row" @submit.prevent="handleSigninUser">
      <div class="col-10 ">
        <label class="form-label"><strong>Username</strong></label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Enter Username"
        />
      </div>

      <div class="col-10 mt-4">
        <label class="form-label"><strong>Password</strong></label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Enter Password"
        />
      </div>

      <div class="col-10 mt-5">
        <button class="col-12 btn p-2" type="submit">
          <h3>Sign In</h3>
        </button>
      </div>

      <div class="row mt-5 ">
        <div class="col-10 signup text-center">
          <h4>Don't have an account?</h4>
        </div>
        <div class="col-10 text-center">
          <router-link class="text-center text-decoration-none" to="/signup">
            <h4>Sign Up</h4>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  watch: {
    user(value) {
      if (value) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
::placeholder {
  color: #040404;
  opacity: 0.8;
}
input {
  background-color: #edf2fb;
  border: 1px solid #040404;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #edf2fb;
}
h1 {
  letter-spacing: 2px;
  font-weight: lighter;
  padding: 10px;
  border-bottom: 2px solid;
  color: #040404;
}

.btn {
  background-color: #36017c;
  color: #edf2fb;
}

.signup {
  border-top: 2px solid;
  padding: 1rem;
}
</style>

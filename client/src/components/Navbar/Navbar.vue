<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #36017c;">
    <!-- Horizontal Navbar -->
    <div class="row w-100" style="margin-left: 1rem;">
      <div class="col-3 p-2 my-auto">
        <b-button
          class="bg-transparent border border-0"
          v-b-toggle.sidebar-backdrop
        >
          <b-icon-list></b-icon-list>
        </b-button>
        <router-link to="/" class="navbar-brand text-white p-2"
          >VUESHARE</router-link
        >
      </div>

      <div class="col-5 my-auto">
        <div class="input-group">
          <span class="input-group-append">
            <button class="btn" type="button">
              <b-icon-search class="text-white"></b-icon-search>
            </button>
          </span>

          <input
            class="form-control"
            type="text"
            placeholder="Search posts..."
          />
        </div>
      </div>

      <div class="col-4">
        <div class="collapse navbar-collapse pt-1">
          <ul class="navbar-nav mx-auto">
            <router-link to="/posts" class="nav-link text-white m-2">
              <b-icon-chat class="text-white"></b-icon-chat>
              <span class="d-none d-xl-inline-block m-2">POSTS</span>
            </router-link>

            <router-link
              v-if="user"
              to="/profile"
              class="nav-link text-white m-2"
            >
              <b-icon-person-circle class="text-white"></b-icon-person-circle>
              <span class="d-none d-xl-inline-block m-2">PROFILE</span>
            </router-link>

            <router-link
              v-if="user"
              to="/signin"
              class="nav-link text-white m-2"
            >
              <span @click="handleSignoutUser">
                <b-icon-box-arrow-right
                  class="text-white"
                ></b-icon-box-arrow-right>
                <span class="d-none d-xl-inline-block m-2">SIGN OUT</span>
              </span>
            </router-link>

            <router-link
              v-if="!user"
              to="/signin"
              class="nav-link text-white m-2"
            >
              <b-icon-lock-fill class="text-white"></b-icon-lock-fill>
              <span class="d-none d-xl-inline-block m-2">SIGN IN</span>
            </router-link>

            <router-link
              v-if="!user"
              to="/signup"
              class="nav-link text-white m-2"
            >
              <b-icon-pencil-fill class="text-white"></b-icon-pencil-fill>
              <span class="d-none d-xl-inline-block m-2">SIGN UP</span>
            </router-link>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sidebar -->

    <b-sidebar bg-variant="light" id="sidebar-backdrop" no-header backdrop>
      <ul
        class="list-group bg-transparent"
        style="position: relative; top: 10%;"
      >
        <div v-if="user">
          <li class="list-group-item border-0 bg-transparent">
            <router-link class="text-decoration-none" to="/posts">
              <b-icon-chat></b-icon-chat>
              <span class="p-2">POSTS</span>
            </router-link>
          </li>

          <li class="list-group-item border-0 bg-transparent">
            <router-link class="text-decoration-none" to="/profile">
              <b-icon-person-circle></b-icon-person-circle>
              <span class="p-2">PROFILE</span>
            </router-link>
          </li>

          <li class="list-group-item border-0 bg-transparent">
            <router-link class="text-decoration-none" to="/post/add">
              <b-icon-star-fill></b-icon-star-fill>
              <span class="p-2">CREATE POST</span>
            </router-link>
          </li>

          <li class="list-group-item border-0 bg-transparent">
            <router-link class="text-decoration-none" to="/signin">
              <span @click="handleSignoutUser">
                <b-icon-box-arrow-right></b-icon-box-arrow-right>
                <span class="p-2">SIGN OUT</span>
              </span>
            </router-link>
          </li>
        </div>

        <div v-else>
          <li class="list-group-item border-0 bg-transparent">
            <router-link class="text-decoration-none" to="/signin">
              <b-icon-lock-fill></b-icon-lock-fill>
              <span class="p-2">SIGN IN</span>
            </router-link>
          </li>

          <li class="list-group-item border-0 bg-transparent">
            <router-link class="text-decoration-none" to="/signup">
              <b-icon-pencil-fill></b-icon-pencil-fill>
              <span class="p-2">SIGN UP</span>
            </router-link>
          </li>
        </div>
      </ul>
    </b-sidebar>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.list-group-item {
  padding: 1.5rem;
}
.list-group-item a {
  color: #36017c;
}
</style>

<template>
  <div v-if="toggle" class="position-fixed">
    <ul class="nav sidebar-nav">
      <!-- Posts -->
      <li>
        <router-link to="/posts"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-chat-left-text-fill hidden-md"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"
            />
          </svg>
          <span class="p-2">POSTS</span>
        </router-link>
      </li>

      <!-- Sign in -->
      <li>
        <router-link to="/signin"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-lock-fill hidden-md"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
            />
          </svg>
          <span class="p-2">SIGN IN</span>
        </router-link>
      </li>

      <!-- Sign up -->
      <li>
        <router-link to="/signup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-pencil-fill hidden-md"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
            />
          </svg>
          <span class="p-2">SIGN UP</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    toggle() {
      return this.$store.getters.getToggleSidebar;
    },
  },
};
</script>

<style scoped>
#sidebar-wrapper {
  z-index: 1000;
  left: 220px;
  width: 0;
  height: 100%;
  margin-left: -220px;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.5s ease;
}

.sidebar-nav {
  position: absolute;
  top: 0;
  width: 220px;
  margin-top: 3rem;
  padding: 0;
  list-style: none;
  z-index: 1;
}

.sidebar-nav li {
  padding: 4px;
  position: relative;
  line-height: 20px;
  display: inline-block;
  width: 100%;
  background-color: #edf2fb;
}

.sidebar-nav li a {
  display: block;
  color: #36017c;
  text-decoration: none;
  padding: 10px 15px 10px 30px;
}

.sidebar-nav li a:hover,
.sidebar-nav li a:active,
.sidebar-nav li a:focus,
.sidebar-nav li.open a:hover,
.sidebar-nav li.open a:active,
.sidebar-nav li.open a:focus {
  color: #36017c;
  text-decoration: none;
  background-color: #b8c0ff;
}

.sidebar-header {
  text-align: center;
  font-size: 20px;
  position: relative;
  width: 100%;
  display: inline-block;
}

.sidebar-brand {
  height: 65px;
  position: relative;
  background: #36017c;
  padding-top: 1em;
}

.sidebar-brand a {
  color: #ddd;
  text-decoration: none;
}

.hamburger {
  position: absolute;
  left: 0;
  z-index: 999;
  width: 32px;
  height: 32px;
  background-color: #36017c;
  border: none;
}

#sidebar-wrapper {
  width: 220px;
}
</style>

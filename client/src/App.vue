<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg" style="background-color: #36017c;">
    <!-- Side Navbar -->
    <div v-if="isClose === false">
      <ul class="nav sidebar-nav p-2">
        <div class="sidebar-header">
          <div class="sidebar-brand">
            <button
              type="button"
              @click="isClose = true"
              class="hamburger animated fadeInLeft is-closed"
              data-toggle="offcanvas"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <li><a href="#home">Posts</a></li>
        <li><a href="#about">Sign In</a></li>
        <li><a href="#events">Sign Up</a></li>
      </ul>
    </div>

    <!-- Horizontal Navbar -->
    <div class="row">
      <div class="col-md-3 p-4">
        <a @click="isClose = false" class="navbar-brand text-white" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </a>
        <a class="navbar-brand text-white" href="#">VUESHARE</a>
      </div>

      <!-- Search form -->
      <div class="col-md-5 my-auto">
        <div class="input-group">
          <!-- Search icon -->
          <span class="input-group-append">
            <button class="btn" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </button>
          </span>

          <!-- Search input -->
          <input
            class="form-control"
            type="text"
            placeholder="Search posts..."
          />
        </div>
      </div>

      <!-- Horizontal Navbar Links -->
      <div class="col-md-4">
        <div class="collapse navbar-collapse pt-1">
          <ul class="navbar-nav mx-auto">
            <router-link to="/posts" class="nav-link text-white m-2">
              <svg
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
              POSTS
            </router-link>

            <router-link to="/signin" class="nav-link text-white m-2">
              <svg
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
              SIGN IN
            </router-link>

            <router-link to="/signup" class="nav-link text-white m-2">
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
              SIGN UP
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isClose: true,
    };
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
  margin: 0;
  padding: 0;
  list-style: none;
}

.sidebar-nav li {
  padding: 5px;
  position: relative;
  line-height: 20px;
  display: inline-block;
  width: 100%;
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
input {
  background-color: transparent;
  color: #f4f4f4;
  border-color: transparent;
  border-bottom-color: #f4f4f4;
}

input:focus {
  background-color: transparent;
  color: #f4f4f4;
  border-color: transparent;
  border-bottom-color: #f4f4f4;
}

input[type="text"] {
  outline: none;
}

::placeholder {
  color: #f4f4f4;
  font-style: italic;
}

a:hover {
  opacity: 0.75;
}
</style>

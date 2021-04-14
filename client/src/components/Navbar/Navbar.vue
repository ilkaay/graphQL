<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #36017c;">
    <sidebar-nav></sidebar-nav>
    <horizontal-nav></horizontal-nav>
  </nav>
</template>

<script>
import SidebarNav from "./SidebarNav";
import HorizontalNav from "./HorizontalNav";
export default {
  components: {
    SidebarNav,
    HorizontalNav,
  },
};
</script>

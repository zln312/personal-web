<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/common/NavMenu";

export default {
  name: "App",
  components: {
    NavMenu
  },
};
</script>

<style></style>

<template>
  <div id="app">
    <div class="top">
      <nav-menu></nav-menu>
      <bread-crumb></bread-crumb>
    </div>

    <router-view class="main"></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/common/NavMenu";
import BreadCrumb from "./components/common/BreadCrumb";

export default {
  name: "App",
  components: {
    NavMenu,
    BreadCrumb,
  },
};
</script>

<style>
.top {
  width: 70%;
  position: fixed;
  top: 0;
  left: 10%;
}

.main {
  margin-top: 100px;
}
</style>

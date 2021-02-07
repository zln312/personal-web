<!--
 * @Author: your name
 * @Date: 2021-01-17 19:05:44
 * @LastEditTime: 2021-02-05 17:21:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\App.vue
-->
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
  created(){
   
  },
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
  z-index: 10;
  background-color: white;
}

.main {
  margin-top: 100px;
  width: 600px;
  margin: 100px auto 30px;
}
</style>

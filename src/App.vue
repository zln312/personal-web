<!--
 * @Author: your name
 * @Date: 2021-01-17 19:05:44
 * @LastEditTime: 2021-02-17 12:37:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\App.vue
-->
<template>
  <div id="app">
    <div class="top">
      <nav-menu></nav-menu>
    </div>

    <router-view class="main"></router-view>
  </div>
</template>

<script>
import NavMenu from "./components/common/NavMenu";
export default {
  name: "App",
  created(){
   
  },
  components: {
    NavMenu,
  },
};
</script>

<style>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: white;
}

.main {
  margin-top: 100px;
  width: 600px;
  margin: 100px auto 30px;
}
</style>

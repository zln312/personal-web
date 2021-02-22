<!--
 * @Author: your name
 * @Date: 2021-01-24 14:11:41
 * @LastEditTime: 2021-02-22 21:53:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\views\Layout.vue
-->
<template>
  <div class="wrap">
    <div class="header">
      <the-heading></the-heading>
    </div>
    <router-view class="main"></router-view>
    <the-footer class="footer"></the-footer>
  </div>
</template>

<script>
import TheHeading from "./TheHeading";
import TheFooter from "./TheFooter";
export default {
  name: "Layout",
  components: {
    TheHeading,
    TheFooter,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
}
.main {
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 50px;
}
.footer{
  position:absolute;
  bottom: 0;
  left: 0;
  margin-top: -50px;
  height: 50px;
  z-index: 9999;
}
.wrap{
  position: relative;
  min-height: 100%;
}
</style>

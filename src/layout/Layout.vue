<!--
 * @Author: your name
 * @Date: 2021-01-24 14:11:41
 * @LastEditTime: 2021-02-20 18:32:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\views\Layout.vue
-->
<template>
  <div>
    <div class="header">
      <the-heading></the-heading>
    </div>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import TheHeading from "./TheHeading";
export default {
  name: "Layout",
  components: {
    TheHeading,
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
.main{
  margin-top: 100px;
  position: relative;
}
</style>

<!--
 * @Author: your name
 * @Date: 2021-01-17 20:39:53
 * @LastEditTime: 2021-02-07 17:48:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\components\common\NavMenu.vue
-->
<template>
  <div class="outer">
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router: true
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'NavMenu',
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push(keyPath[0])
    },
  },
};
</script>
<style scoped>
</style>

<!--
 * @Author: your name
 * @Date: 2021-01-17 20:39:53
 * @LastEditTime: 2021-02-17 12:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\components\common\NavMenu.vue
-->
<template>
  <div class="outer">
     <img src="../../assets/shell.jpg" alt="" height="60px"> 
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="dimgrey"
      text-color="#B2DFDB"
      active-text-color="#B2DFDB"
      router: true
    >
      <el-menu-item index="/">首页</el-menu-item>
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
  .outer{
    display: flex;
    justify-content: space-around;
    background-color:dimgrey;
  }

</style>

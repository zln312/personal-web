<!--
 * @Author: your name
 * @Date: 2021-02-21 19:27:13
 * @LastEditTime: 2021-02-21 21:24:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\layout\Thefooting.vue
-->
<template>
  <div class="outer">
    <div>
      <span class="text">Copyright ©2019 zlnkyb.cn All Rights Reserved | </span>
      <a href="https://beian.miit.gov.cn/">
        陕ICP备19025101号
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.outer {
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  color: #fff;
}
</style>

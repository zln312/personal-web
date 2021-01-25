<template>
  <div>
    <div class="title">在疫情肆虐期间，做好防护，不要心存侥幸</div>
    <div class="content">
      2002年非典期间，我还是一个小学生，那时候板蓝根卖的脱销了，我的心情还没有今天沉重。只知道非典持续到2003年，从小学毕业到初中第一年，年少轻狂的时候不怕死，誓死不喝板蓝根，和亲爹抬扛半天。
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetail",
  created() {
    console.log(this.$route.params.id);
  },
};
</script>

<style scoped>
  .title{
    font-size: 24px;
    font-weight: 500;
    margin: 30px 0;
  }
</style>

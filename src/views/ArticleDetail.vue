<!--
 * @Author: your name
 * @Date: 2021-01-25 19:45:49
 * @LastEditTime: 2021-02-16 23:38:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\views\ArticleDetail.vue
-->
<template>
  <div>
    <div class="title">{{article.title}}</div>
    <div class="content" v-html="article.content">
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetail",
  data(){
    return {
      article:{}
    }
  },
  created() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
     this.$http.get(this.$api.getArticleById(id)).then(res=>{
       console.log(res.data);
       this.article = res.data;
    })
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

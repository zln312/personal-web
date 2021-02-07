<template>
  <div>
    <div class="title">{{article.title}}</div>
    <div class="content">
      {{article.content}}
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

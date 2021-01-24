<template>
  <div class="list-outer">
    <article-list-item></article-list-item>
    <article-list-item></article-list-item>
    <article-list-item></article-list-item>
    <article-list-item></article-list-item>
    <article-list-item></article-list-item>
  </div>
</template>

<script>
import ArticleListItem from '../components/ArticleListItem'
export default {
  name: 'ArticleList',
  components:{
    ArticleListItem
  }
}
</script>

<style scoped>
  .list-outer{
    margin: 30px auto;
    width: 600px;
  }

</style>
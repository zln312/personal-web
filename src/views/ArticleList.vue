<template>
  <div class="list-outer">
    <div v-for="(item,index) in list" :key="index" @click="listClick(index)">
    <article-list-item></article-list-item>
    </div>
  </div>
</template>

<script>
import ArticleListItem from '../components/ArticleListItem'
export default {
  name: 'ArticleList',
  components:{
    ArticleListItem
  },
  data(){
    return {
      list:[
        1,2,3
      ]
    }
  },
  methods:{
    listClick(index){
      this.$router.push(`/detail/${index}`)
    }
  }
}
</script>

<style scoped>

</style>
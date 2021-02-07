<template>
  <div class="list-outer">
    <div v-for="(item,index) in list" :key="index" @click="listClick(item.id)">
    <article-list-item :val=item></article-list-item>
    </div>
  </div>
</template>

<script>
import ArticleListItem from '../components/ArticleListItem'
export default {
  name: 'ArticleList',
  mounted(){
     this.$http.get(this.$api.getArticleList).then(res=>{
       this.list = res.data;
    })
  },
  components:{
    ArticleListItem
  },
  data(){
    return {
      list:[
      ]
    }
  },
  methods:{
    listClick(id){
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
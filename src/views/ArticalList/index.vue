<!--
 * @Author: your name
 * @Date: 2021-01-24 14:32:07
 * @LastEditTime: 2021-02-28 22:01:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\views\ArticleList.vue
-->
<template>
  <div class="list-outer">
    <div v-for="(item,index) in list" :key="index">
    <article-list-item :val=item @goto="goto(item.id)"></article-list-item>
    </div>
  </div>
</template>

<script>
import ArticleListItem from './ArticleListItem'
export default {
  name: 'ArticleList',
  mounted(){
     this.$http.post(this.$api.getArticleList,{pageSize:20,pageNum:1}).then(res=>{
       this.list = res.data.content;
       console.log(res.data);
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
    goto(id){
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
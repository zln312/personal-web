<!--
 * @Author: your name
 * @Date: 2021-01-24 15:09:39
 * @LastEditTime: 2021-02-28 21:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\components\ArticleListItem.vue
-->
<template>
  <div class="container">
      <div class="article-title">{{val.title}}</div>
      <span>{{val.intro}}</span>
      <div class="item-btm">
        <span class="tag">{{val.tagName}}</span>
        <span class="time">{{val.updateTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span>
      </div>
      <el-button size="small" class="item-btn" @click="clickShow">查看原文</el-button>
  </div>
</template>

<script>
export default {
  name: "ArticleListItem",
  props:[
    'val'
  ],
  methods:{
    clickShow(){
      this.$emit('goto')
    }
  },

};
</script>

<style scoped lang="scss">
.container{
  width: 700px;
  height: 150px;
  background-color: #E65C5C;
  margin-bottom: 20px;
  border-radius: 2px;
  padding: 20px;
  position: relative;
}
.item-outer {
  display: flex;
  background-color: aquamarine;
  margin: 30px 0;
}
.item-btm{
  position: absolute;
  bottom: 10px;
  left: 20px;
}
.item-btn{
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: #C4C4C4;
  color:#D62D2D;
  font-size: 13px;
  font-weight: 600;
}
.article-img {
  width: 200px;
  height: 200px;
}
.article-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}
.item-right {
  margin: 0 30px;
  margin: 20px;
  position: relative;
}
.summary {
  display: -webkit-box;

  overflow: hidden;

  white-space: normal !important;

  text-overflow: ellipsis;

  word-wrap: break-word;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;

  font-size: 12px;

  color: darkcyan;
}
.attr{
  position:absolute;
  bottom: 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.tag {
  font-size: 10px;
  color:maroon;
  margin-right: 10px;
  }
.tag::before{
  content:'';
  width: 17px;
  height: 17px;
  display: inline-block;
  background-size: contain;
  background-image: url('~@/assets/tag.svg');
  vertical-align: text-top;
}
.time {
  font-size: 10px;
  color:#fff;
}
.time::before{
  content:'';
  width: 15px;
  height: 15px;
  display:inline-block;
  background-size: contain;
  background-image: url('~@/assets/time.svg');
  vertical-align: text-top;

}
</style>

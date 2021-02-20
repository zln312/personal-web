<!--
 * @Author: your name
 * @Date: 2021-01-24 15:09:39
 * @LastEditTime: 2021-02-20 21:25:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personal\src\components\ArticleListItem.vue
-->
<template>
  <div class="item-outer">
    <img class="article-img" src="~@/assets/logo.png" alt=""/>
    <div class="item-right">
      <div class="article-title">{{val.title}}</div>
      <span class="summary"
        >{{val.intro}}</span
      >
      <div class="attr">
        <span class="tag">{{val.tag}}</span>
        <span class="time">2021/1/24 12:34</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleListItem",
  props:[
    'val'
  ]
};
</script>

<style scoped lang="scss">
.item-outer {
  display: flex;
  background-color: aquamarine;
  margin: 30px 0;
}
.article-img {
  width: 200px;
  height: 200px;
}
.article-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
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
  color:magenta;
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

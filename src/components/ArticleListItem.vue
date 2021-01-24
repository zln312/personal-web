<template>
  <div class="item-outer">
    <img class="article-img" src="../assets/logo.png" />
    <div class="item-right">
      <div class="article-title">微信小程序---页面间传值</div>
      <span class="summary"
        >从一月份到现在的四月份，这个寒假足足放了三个月，而且开学时间还未定，最快都要五月吧，而且我在广东，这应该更久吧，极大可能这学期真的都在上网课。
        由于这个疫情，从国内到全世界恶化，影响还是挺大的，多希望能早点结束啊。</span
      >
      <div class="attr">
        <span class="tag">技术分享</span>
        <span class="time">2021/1/24 12:34</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleListItem",
};
</script>

<style scoped>
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
  background-image: url('../assets/tag.svg');
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
  background-image: url('../assets/time.svg');
  vertical-align: text-top;

}
</style>

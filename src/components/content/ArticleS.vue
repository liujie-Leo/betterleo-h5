<template>
  <div class='container'>
    <div class="article" v-for="item in list" :key="item.id" @click='goToArticle(item.id)'>
      <div :class="[{'article-left':true},{'no-img':!item.coverImage}]">
        <div class="title">{{item.title}}</div>
      </div>
      <div v-if="item.coverImage" class="article-right">
        <div class="img-box">
          <img :src="item.coverImage">
        </div>
      </div>
    </div>
    <LoadMore :isLoading="isLoading" :isEnd="isEnd" @getMoreData="getMoreData"></LoadMore>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () { return [] }
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isEnd: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goToArticle (id) {
      this.$router.push({
        path: '/article',
        query: { id }
      })
    },
    getMoreData () {
      this.$emit('getMoreData')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.container{
  width: 100%;
  .article{
    width: 100%;
    height: 130px;
    border-radius: 12px;
    margin-bottom: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .article-left{
      width: 530px;
      .time{
        font-size: 12px;
        color: #888;
      }
      .title{
        font-size:32px
      }
    }
    .no-img{
      width: 100%!important;
    }
    .article-right{
      width: 150px;
      height: 75px;
      .img-box{
        height: 100%;
        border-radius: 6px;
        overflow: hidden;
      }
    }
  }
  .load-more{
    border-radius: 3px;
    width: 700px;
    height: 100px;
    .load-text{
      text-align: center;
      background-color: #fff;
      color: @main-4;
      height: 100%;
      width: 100%;
      line-height: 100px;
    }
  }
}
</style>

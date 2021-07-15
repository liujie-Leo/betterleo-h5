<template>
  <div class='container'>
    <div class="article" v-for="item in list" :key="item.id" @click='goToArticle(item.id)'>
      <div class="article-left">
        <div class="cover-img-box">
          <img :src="item.coverImage" alt="">
        </div>
      </div>
      <div class="article-right">
        <div class="tags">
          <span class="tag" v-for="subItem in item.tags" :key="subItem.id">{{subItem}}</span>
        </div>
        <div class="title">
          {{item.title}}
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
.container{
  width: 100%;
  .article{
    width: 100%;
    height: 200px;
    border-radius: 12px;
    margin-bottom: 12px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    .article-left{
      width: 360px;
      .cover-img-box{
        width: 100%;
        height: 100%;
      }
    }
    .article-right{
      width: 340px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 12px;
      .subtitle{
        .tags{
          display: flex;
        }
      }
      .title{
        font-size: 24px;
      }
    }
  }
}
.tag{
  font-size: 12px;
  background-color: #ddd;
  border-radius: 6px;
  padding: 0 6px;
  color: #fff;
  margin-right: 6px;
}
</style>

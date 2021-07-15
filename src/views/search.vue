<template>
  <div class='container'>
      <Header></Header>
      <div class="content-box">
        <div class="title">搜索结果：</div>
        <ArticleS v-if="list.length>0" :list="list" :isLoading='isLoading' :isEnd='isEnd' :getMoreData="getMoreData"></ArticleS>
        <NoData v-if="list.length===0"></NoData>
      </div>
      <Footer></Footer>
  </div>
</template>
<script>
import ApiArticle from '@/api/service/api/article'
const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      searchValue: '',
      list: [],
      isLoading: false,
      isEnd: false,
      page: 1
    }
  },
  mounted () {
    this.searchValue = this.$route.query.searchValue
    this.getData()
  },
  methods: {
    getData () {
      if (this.searchValue) {
        apiArticle.getArticle({ title: this.searchValue, page: this.page }).then(res => {
          if (this.page >= res.data.total) {
            this.isEnd = true
          }
          this.list = res.data.list
        })
      }
    },
    getMoreData () {

    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.container{
  background-color:@main-bg;
  .content-box{
    min-height: calc(100vh -294px);
    width: 700px;
    margin: 32px auto 0;
    .title{
      font-size: 48px;
      font-weight: 600;
      color: @main-5;
    }
  }
}
</style>

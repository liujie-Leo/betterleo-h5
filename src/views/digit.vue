<template>
  <div class='container'>
    <Header page='digit'></Header>
    <div class="content">
      <div class="tags-box">
        <Tags :list='digitSubType' @onClickTag="onClickTag"></Tags>
      </div>
      <div class="article-box">
        <ArticleL v-if="articleList.length>0" :list='articleList' :isLoading="isLoading" :isEnd="isEnd" @getMoreData="getMoreData"></ArticleL>
        <NoData v-else></NoData>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import ApiArticle from '@/api/service/api/article'
import { digitSubType } from '@/json/data'
const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      digitSubType,
      page: 1,
      isLoading: false,
      isEnd: false,
      articleList: [],
      subType: '',
      params: {
        page: 1,
        pageSize: 8,
        type: 'digit',
        subType: ''
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      apiArticle.getArticle(this.params).then(res => {
        this.articleList = res.data.list
        if (this.params.page >= res.data.total) {
          this.isEnd = true
        }
        // this.loadingCount++
      })
    },
    onClickTag (value) {
      this.params.subType = value
      this.params.page = 1
      this.isEnd = false
      this.getData()
    },
    getMoreData () {
      this.isLoading = true
      this.params.page = this.params.page + 1
      apiArticle.getArticle(this.params).then(res => {
        if (this.params.page >= res.data.total) {
          this.isEnd = true
        }
        this.articleList = this.articleList.concat(res.data.list)
        this.isLoading = false
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.container{
  background-color: @main-bg;
  .content{
    width: 700px;
    margin: 0 auto;
    min-height: calc(100vh -260px);
    .tags-box{
      width: 700px;
      margin: 34px auto 24px;
    }
  }
}
</style>

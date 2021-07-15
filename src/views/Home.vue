<template>
  <div class="home-container">
    <Header></Header>
    <div v-if="isFinished">
      <!-- <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiperList" :key='item.id' @click='goToPage(item.articleId)'>
          <img class='swiper-img' :src="item.url">
        </van-swipe-item>
      </van-swipe> -->
      <div class="scroll-box" v-if='false'>
        阿道夫老款的设计费我垃圾袋射流风机爱上的看法贾老师大家发拉时代峻峰垃圾水电费垃圾水电费看垃圾水电费看了教室里地方第三方
      </div>
      <div class="article-box">
        <!-- <ArticleL :list='articleList' @getMoreData="getMoreData"></ArticleL> -->
        <ArticleS :list='articleList' :isLoading="isLoading" :isEnd="isEnd" @getMoreData="getMoreData"></ArticleS>
      </div>
    </div>
    <div class="skeleton" v-if="!isFinished">
      <van-skeleton title :row="4" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import ApiArticle from '@/api/service/api/article'
import ApiSwiper from '@/api/service/api/swiper'
const apiSwiper = new ApiSwiper()
const apiArticle = new ApiArticle()
export default {
  data () {
    return {
      swiperList: [],
      articleList: [],
      page: 1,
      isEnd: false,
      isFinished: false,
      isLoading: false,
      loadingCount: 0
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    loadingCount (value) {
      if (value >= 2) {
        this.isFinished = true
      }
    }
  },
  methods: {
    getData () {
      apiSwiper.getSwiperList({ online: 1, type: 'home' }).then(res => {
        this.swiperList = res.data.list
        this.loadingCount++
      })
      apiArticle.getArticle({ page: 1, pageSize: 10 }).then(res => {
        this.articleList = res.data.list
        this.loadingCount++
      })
    },
    getMoreData () {
      this.isLoading = true
      this.page = this.page + 1
      const params = {
        page: this.page,
        pageSize: 10
      }
      apiArticle.getArticle(params).then(res => {
        if (this.page >= res.data.total) {
          this.isEnd = true
        }
        this.articleList = this.articleList.concat(res.data.list)
        this.isLoading = false
      })
    },
    goToPage (id) {
      this.$router.push({
        path: '/article',
        query: {
          id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.home-container{
  width: 750px;
  background-color: #fafafa;
  min-height: 100vh;
  .swipe{
    width: 700px;
    margin:24px auto 0;
    border-radius: 12px;
    height: 350px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
    }
    .swiper-img{
      height: 100%;
      width: 100%;
    }
  }
  .scroll-box{
    width: 700px;
    margin: 24px auto;
    height: 200px;
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
    // background-color: #ccc;
  }
  .scroll-box::-webkit-scrollbar {
    display: none;
  }
  .article-box{
    width: 700px;
    margin: 24px auto;
  }
  .loading-box{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skeleton{
    padding-top: 32px;
    height:calc(100vh - 280px);
  }
}
</style>

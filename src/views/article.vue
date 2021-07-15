<template>
  <div class='container'>
    <Header></Header>
    <div class="article" v-if="isFinished">
      <div class="cover-img-box" v-if="articleInfo.coverImage">
        <img :src="articleInfo.coverImage" alt="">
      </div>
      <div class='title'>{{articleInfo.title}}</div>
      <mavon-editor
        class="md"
        :value="articleInfo.content"
        :subfield="false"
        default-open="preview"
        :toolbars-flag="false"
        :editable="false"
        :scroll-style="false"
        preview-background="#fff"
        :box-shadow="false"
        :external-link="externalLink"
        code-style="atom-one-dark"/>
      <div class="back-btn" @click='onBack'>
        <span class='iconfont icons_fanhui2' style='font-size:24px'></span>
        <span class='back-text'>BACK</span>
      </div>
    </div>
    <div class="skeleton" v-if="!isFinished">
      <van-skeleton title :row="4" :animate="true"/>
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
      articleInfo: {},
      isFinished: false,
      externalLink: {
        markdown_css: function () {
          // 这是你的markdown css文件路径
          return 'https://www.betterleo.com/cdn/markdown/markdown/github-markdown.min.css'
        },
        hljs_js: function () {
          // 这是你的hljs文件路径
          return 'https://www.betterleo.com/cdn/markdown/highlightjs/highlight.min.js'
        },
        hljs_css: function (css) {
          // 这是你的代码高亮配色文件路径
          return 'https://www.betterleo.com/cdn/markdown/highlightjs/styles/' + css + '.min.css'
        },
        hljs_lang: function (lang) {
          // 这是你的代码高亮语言解析路径
          return 'https://www.betterleo.com/cdn/markdown/highlightjs/languages/' + lang + '.min.js'
        },
        katex_css: function () {
          // 这是你的katex配色方案路径路径
          return 'https://www.betterleo.com/cdn/markdown/katex/katex.min.css'
        },
        katex_js: function () {
          // 这是你的katex.js路径
          return 'https://www.betterleo.com/cdn/markdown/katex/katex.min.js'
        }
      }
    }
  },
  mounted () {
    this.getArticleInfo()
    this.createLink()
  },
  methods: {
    getArticleInfo () {
      apiArticle.getArticle({ id: this.$route.query.id }).then(res => {
        this.articleInfo = res.data.list[0]
        this.isFinished = true
      })
    },
    onBack () {
      this.$router.go(-1)
    },
    createLink () {
      var head = document.getElementsByTagName('head')[0]
      var linkTag = document.createElement('link')
      linkTag.href = 'https://www.betterleo.com/cdn/markdown/highlightjs/styles/atom-one-dark.min.css'
      linkTag.setAttribute('rel', 'stylesheet')
      linkTag.setAttribute('id', 'md-code-style')
      linkTag.setAttribute('type', 'text/css')
      head.appendChild(linkTag)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.article{
  width: 700px;
  margin: 24px auto 0;
  min-height: calc(100vh - 296px);
  .cover-img-box{
    width: 700px;
    height: 350px;
    border-radius: 8px;
    overflow: hidden;
  }
  .title{
    font-size: 54px;
    font-weight: 600;
    margin-top: 24px;
  }
  .back-btn{
    display: flex;
    align-items: center;
    margin: 24px 0 46px;
    color: @main-5;
    .back-text{
      font-size: 22px;
      margin-left: 6px;
    }
  }
}
.skeleton{
    padding-top: 32px;
    height:calc(100vh - 280px);
  }
.md{
  z-index: 0;
  background-color: #fff;
  border: none;
}
/deep/ .v-show-content{
  padding: 0!important;
  width: 700px!important;
  overflow: hidden;
}
/deep/ pre{
  border-radius:8px!important;
  padding:0px!important
}
</style>

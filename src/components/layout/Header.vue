<template>
  <div class='container'>
    <div class="logo-box" @click="goToPage('home')">
      <div class="img-box">
        <img src="../../assets/images/logo.svg">
      </div>
      <div class="logo-text">BetterLeo</div>
    </div>
    <div class="search-box">
      <span class='iconfont iconsousuo sousuo-reset' @click="onShowPopup"></span>
      <van-popover
        v-model="showPopover"
        trigger="click"
        @select="onSelect"
        placement="bottom-end"
      >
        <div class="pop-over-box">
          <div :class="[{'menu-item':true},{'active-menu':$route.name==='Home'}]" @click="goToPage('home')">
            <span class='iconfont iconzhuye menu-icon-reset'></span>
            <span class='menu-text'>主页</span>
          </div>
          <div :class="[{'menu-item':true},{'active-menu':$route.name==='Development'}]" @click="goToPage('development')">
            <span class='iconfont iconhaoyou menu-icon-reset'></span>
            <span class='menu-text'>开发</span>
          </div>
          <div :class="[{'menu-item':true},{'active-menu':$route.name==='Digit'}]" @click="goToPage('digit')">
            <span class='iconfont iconshuma-shouji menu-icon-reset' style="font-size:20px"></span>
            <span class='menu-text'>数码</span>
          </div>
        </div>
        <template #reference>
          <div class="icon-box">
            <span v-if="page==='home'" class='iconfont iconzhuye zhuye-reset' @click="onSelectMenu"></span>
          </div>
          <div class="icon-box">
            <span v-if="page==='development'" class='iconfont iconhaoyou zhuye-reset'  @click="onSelectMenu"></span>
          </div>
          <div class="icon-box">
            <span v-if="page==='digit'" class='iconfont iconshuma-shouji zhuye-reset' @click="onSelectMenu"></span>
          </div>
        </template>
      </van-popover>
    </div>
    <van-popup v-model='showPopup'  position="top">
      <div class="seach-box">
        <div class="search-title">探索BetterLeo </div>
        <div class="ipt-box">
          <input v-model='searchValue' class='search-ipt' ref="searchInput" type="text" placeholder="..." @keyup.enter="onSearch">
          <span class='iconfont iconsousuo ipt-sousuo-reset' @click='onSearch'></span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: 'home'
    }
  },
  data () {
    return {
      showPopup: false,
      searchValue: '',
      showPopover: false
    }
  },
  methods: {
    onShowPopup () {
      this.showPopup = true
      setTimeout(() => {
        this.$nextTick(() => {
          this.$refs.searchInput.focus()
        })
      }, 400)
    },
    goToPage (type) {
      if (this.$route.name === type) {
        this.$router.go(0)
        return
      }
      const obj = {
        home: '/',
        development: '/development',
        digit: '/digit'
      }
      this.$router.push({
        path: obj[type]
      })
    },
    onSearch () {
      if (this.searchValue) {
        this.showPopup = false
        this.$router.push({
          path: '/search',
          query: {
            searchValue: this.searchValue
          }
        })
        if (this.$route.name === 'Search') {
          this.$router.go(0)
        }
      }
    },
    onSelectMenu () {

    },
    onSelect () {

    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.container{
  height: 128px;
  width: 750px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 16px 16px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @white!important;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  .logo-box{
    display: flex;
    align-items: center;
    .img-box{
      height: 64px;
      width: 64px;
    }
    .logo-text{
      font-weight: 600;
      margin-left: 6px;
      font-size: 42px;
      color: @main-5;
    }
  }
  .search-box{
    .sousuo-reset{
      font-size: 36px;
      padding: 12px;
      margin-right: 24px;
    }
    .icon-box{
      width: 64px;
      .zhuye-reset{
        font-size: 38px;
        padding: 12px;
      }
    }

  }
  .seach-box{
    height: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: @gray-1;
    .search-title{
      font-size: 36px;
      font-weight: 600;
      margin-top: 24px;
      color: @main-5;
    }
    .ipt-box{
      height: 78px;
      width: 580px;
      border: 1px solid @gray-3;
      background-color: @white;
      margin-top: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      .ipt-sousuo-reset{
        font-size: 34px;
        margin-left: 12px;
        color: @main-4;
      }
      .search-ipt{
        border: none;
        color: @main-4;
        font-size: 28px;
        width: 460px;
      }
    }
  }
}
.pop-over-box{
  height: 200px;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .menu-item{
    display: flex;
    align-items: center;
    height: 60px;
    .menu-text{
      font-size: 32px;
      color: @main-3;
      font-weight: 600;
    }
    .menu-icon-reset{
      font-size: 32px;
      margin-right: 6px;
      color: @main-3;
    }
  }
  .active-menu{
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    padding: 0 8px;
    border-radius: 12px;
    .menu-text{
      color: @main-5;
    }
    .menu-icon-reset{
      font-size: 32px;
      margin-right: 6px;
      color: @main-5;
    }
  }
}
/deep/ .van-popup{
  border-radius:0 0 12px 12px;
}
</style>

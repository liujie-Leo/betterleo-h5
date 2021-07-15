<template>
  <div class="load-more" v-if="!isEnd">
    <Loading v-if="isLoading"></Loading>
    <div v-else  class="load-text" @click='getMoreData'>加载更多</div>
  </div>
</template>
<script>
export default {
  props: {
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
    getMoreData () {
      this.$emit('getMoreData')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
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
    font-size: 32px;
  }
}
</style>

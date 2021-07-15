<template>
  <div class='container'>
    <div :class="[{'tag':true},{'active-tag':activeTag===item.value}]" v-for="item in list" :key="item.id" @click="onClickTag(item.value)">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: function () { return [] }
    }
  },
  data () {
    return {
      activeTag: ''
    }
  },
  methods: {
    onClickTag (value) {
      this.activeTag = value
      this.$emit('onClickTag', value)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.container{
  width: 100%;
  display: flex;
  .tag{
    font-size: 26px;
    padding: 0px 18px;
    border-radius: 14px;
    margin-right: 6px;
    color: @main-5;
    font-weight: 600;
    height: 50px;
    line-height: 50px;
  }
  .active-tag{
    color: #fff;
    background-color: @main-5;
  }
}
</style>

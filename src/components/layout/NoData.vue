<template>
  <div class="no-data">
    <div class="img-box">
      <img src="../../assets/images/noData.svg">
    </div>
    <span class="title fs-14">{{ title }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '没有内容'
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/vendor.less';
.no-data{
  width:100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items :center;
  flex-direction: column;
  background-color: #fff;
  margin-top: 20px;
}

.img-box{
  height: 186px;
  width: 186px;
}
.title{
  color:@gray-6;
  font-size: 28px;
}
</style>

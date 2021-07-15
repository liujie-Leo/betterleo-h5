<template>
  <div class='container'>
    <div class="contact-box">
      <div class="img-box">
        <img src="../../assets/images/weixin.svg">
      </div>
      <!-- <div class="img-box">
        <img src="../../assets/images/weibo.svg">
      </div> -->
      <div class="img-box">
        <img src="../../assets/images/twitter.svg">
      </div>
    </div>
    <div class="power">
      Develop by Leo
      <div class="img-box">
        <img src="https://www.betterleo.com/images/author.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.container{
  height: 128px;
  width: 750px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px 16px 0px 0px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 24px;
  .contact-box{
    display: flex;
    align-items: center;
    .img-box{
      height: 46px;
      width: 46px;
      margin-right: 24px;
    }
  }
  .power{
    font-size: 24px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    .img-box{
      height: 64px;
      width: 64px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 18px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

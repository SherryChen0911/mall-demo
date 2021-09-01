<template>
  <div class="cnt">
    <van-nav-bar class="nav-bar" title="我的" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="navbar-palceholder"></div>
    <div class="profile-card">
      <van-image fit="contain" :src="require('@/assets/logo.png')" style="width:80px"/>
      <div class="profile-cnt">奔跑的小琳琳</div>
    </div>
    <div class="order-area">
      <div class="order-grid-item">
        <span class="iconfont">&#xe604;</span>
        <div style="color:#1be4a1; margin-top:5px;">全部</div>
      </div>
      <div class="order-grid-item">
        <span class="iconfont">&#xe7bc;</span>
        <div style="color:#1be4a1; margin-top:5px;">待支付</div>
      </div>
      <div class="order-grid-item">
        <span class="iconfont">&#xe60a;</span>
        <div style="color:#1be4a1; margin-top:5px;">待发货</div>
      </div>
      <div class="order-grid-item">
        <span class="iconfont">&#xe6a6;</span>
        <div style="color:#1be4a1; margin-top:5px;">已完成</div>
      </div>
    </div>
    <div class="other-area">
      <!-- <div style="width:100%; height:500px; background-color:red;margin-bottom:10px">123</div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import "@/assets/iconfont.css";

export default {
  name: 'Profile',
  components: {
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    }
  }
}
</script>

<style lang="scss">
.profile-card{
  height: 150px;
  padding: 10px 20px;
  background-image: linear-gradient(to right, #1be4a1, #34e4e4c4);
  display: flex;
  align-items: flex-start;
}
.profile-cnt{
  flex: 1;
  margin: 10px 20px;
  text-align: left;
  color: #ffffff;
}
.order-area{
  position: absolute;
  top: 150px;
  left: 10px;
  right: 10px;
  height: 80px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 1px 1px 3px grey;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order-grid-item{
  flex: 1;
  height: 100%;
  // background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.other-area{
  margin: 46px 10px 10px 10px;
  width: calc(100% - 20px);
  height:500px;
  background-color: #ffff;
  box-shadow: 1px 1px 3px grey;
  border-radius: 20px;
}

</style>
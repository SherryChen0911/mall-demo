<template>
  <van-nav-bar class="nav-bar" title="我的" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="profile-card">
    <van-image fit="contain" :src="require('@/assets/logo.png')" style="width:80px"/>
    <div class="profile-cnt">奔跑的小琳琳</div>
  </div>
  <div class="order-area">
    <van-grid border="false" style="width:100%;">
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
  <div class="other-area">

  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

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
  background-color: #ffff;
  box-shadow: 1px 1px 3px grey;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.other-area{
  position: absolute;
  top: 260px;
  left: 10px;
  right: 10px;
  height: 500px;
  background-color: #ffff;
  box-shadow: 1px 1px 3px grey;
  border-radius: 20px;
  

}
</style>
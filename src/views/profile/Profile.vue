<template>
  <van-nav-bar class="nav-bar" title="我的" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="profile-card">
    <van-image fit="contain" :src="require('@/assets/logo.png')" style="width:80px"/>
    <div class="profile-cnt">奔跑的小琳琳</div>
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
  // width: calc(100% - 40px);
  margin: 10px;
  padding: 10px 20px;
  background-image: linear-gradient(to right, #1be4a1, #34e4e4c4);
  border-radius: 10px;
  display: flex;
}
.profile-cnt{
  flex: 1;
  margin: 10px 20px;
  text-align: left;
  color: #ffffff;
}
</style>
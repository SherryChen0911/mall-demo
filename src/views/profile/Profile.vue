<template>
  <van-nav-bar class="nav-bar" title="我的" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <div>
    <van-image fit="contain" :src="require('@/assets/logo.png')"/>
    <div>奔跑的小琳琳</div>
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

    },
    onClickRight(){

    }
  }
}
</script>

<style lang="scss">
</style>
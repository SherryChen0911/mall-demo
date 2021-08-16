<template>
  <van-nav-bar class="nav-bar" title="图书兄弟" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/1.png')"/></van-swipe-item>
    <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/2.png')"></van-image></van-swipe-item>
    <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/3.png')"/></van-swipe-item>
  </van-swipe>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.css";

export default {
  name: 'Index',
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
  .my-swipe{
    // height: 150px;
    background-color: aqua;
  }
</style>
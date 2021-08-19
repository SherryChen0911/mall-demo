<template>
  <van-nav-bar class="nav-bar" title="图书兄弟" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import "../assets/global.scss";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
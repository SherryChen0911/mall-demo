<template>
<div>
  <van-nav-bar class="nav-bar" title="地址管理" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
</div>
  
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: 'Index',
  components: {
  },
  data(){
    return {
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
  }
}
</script>

<style lang="scss">
</style>
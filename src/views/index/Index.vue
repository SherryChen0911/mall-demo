<template>
  <div>
    <van-nav-bar class="nav-bar" title="图书兄弟" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="navbar-palceholder"></div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/1.png')"/></van-swipe-item>
      <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/2.png')"></van-image></van-swipe-item>
      <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/3.png')"/></van-swipe-item>
    </van-swipe>
    <van-tabs v-model="tabSelect">
      <van-tab title="畅销">
        <div class="column2-row">
          <div class="column2-row-item" @click="toDetail">
            <van-image :src="require('@/assets/images/11.png')" alt=""/>
            <div class="column2-row-item-name">《产品经理手册》</div>
            <div class="column2-row-item-tip">
              <span class="column2-row-item-tip-item">价格</span>
              <span class="column2-row-item-tip-item">星星</span>
              <span class="column2-row-item-tip-item">收藏数</span>
            </div>
          </div>
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/22.png')" alt=""/>
            <div>《产品经理手册》</div>
            <div>
              <span>价格</span>
              <span>星星</span>
              <span>收藏数</span>
            </div>
          </div>
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/33.png')" alt=""/>
            <div>《产品经理手册》</div>
            <div>
              <span>价格</span>
              <span>星星</span>
              <span>收藏数</span>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="新书">
        
      </van-tab>
      <van-tab title="精选">
        
      </van-tab>
    </van-tabs>
    <!-- <div class="tabbar-placeholder"></div> -->
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
      tabSelect: 0,
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    toDetail(){
      this.$router.push({path:"/detail"})

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
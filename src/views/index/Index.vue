<template>
  <van-nav-bar class="nav-bar" title="图书兄弟" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/1.png')"/></van-swipe-item>
    <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/2.png')"></van-image></van-swipe-item>
    <van-swipe-item><van-image fit="contain" :src="require('@/assets/images/3.png')"/></van-swipe-item>
  </van-swipe>
  <van-tabs v-model="tabSelect">
  <van-tab title="畅销">
    <div class="column2-row">

      <div class="column2-row-item">
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
  .column2-row{
    width: calc(100% - 20px);
    // background-color: red;
    padding: 0 10px 10px 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .column2-row-item{
    // background-color: aqua;
    width: calc(50% - 40px);
    padding: 20px;
  }
  .column2-row-item-name{
    display: block;
    margin: 0 auto;
  }
  .column2-row-item-tip{
    display: block;
    margin: 0 auto;
  }
  .column2-row-item-tip-item{
    padding: 2px;
  }
</style>
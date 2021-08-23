<template>
  <van-nav-bar class="nav-bar" title="图书详情" right-text="按钮" left-arrow fixed z-index="10" @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="detail-cnt">
    <van-image :src="require('@/assets/images/11.png')" alt=""/>
    <div class="detail-info">
      <div class="detail-info-title">《细说PHP》第4版</div>
      <div class="detail-info-other">
        <span style="color: #EE0A24; font-size: 12px; font-weight: bold;">￥</span>
        <span style="color: #EE0A24; font-size: 20px; font-weight: bold; padding-right:4px;">78</span>
        <span style="text-decoration: line-through; font-size: 12px;">￥10.00</span>
        <span style="flex: 1; text-align: right; font-size: 12px;">销量:10</span>
      </div>
      
    </div>
    <div style="width:100%;height:10px;background-color:#faf6f6;"></div>
    <van-tabs v-model="active" sticky offset-top="46px">
      <van-tab title="概述">
      </van-tab>
      <van-tab title="热评">
      </van-tab>
      <van-tab title="相关书籍">
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
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/33.png')" alt=""/>
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
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/33.png')" alt=""/>
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
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/33.png')" alt=""/>
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
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/33.png')" alt=""/>
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
          <div class="column2-row-item">
            <van-image :src="require('@/assets/images/33.png')" alt=""/>
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
    </van-tabs>
  </div>
  <div class="operate-area">
    <div class="shop-icon" @click="toShopcart">
      <van-icon name="shopping-cart-o" size="20px" badge="9"/>
      <span>购物车</span>
    </div>
    <div class="detail-btn">
        <van-button class="btn" color="linear-gradient(to right, #ffba6a, #FF976A)">加入购物车</van-button>
        <van-button class="btn" color="linear-gradient(to right, #ff6034, #EE0A24)" @click="toPreorder">立即购买</van-button>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: 'Profile',
  components: {
  },
  data(){
    return {
      active:0,
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
      // this.$router.removeRoute("/index")

    },
    onClickRight(){

    },
    toShopcart(){
      this.$router.replace({path:"/shopcart"});
    },
    toPreorder(){
      this.$router.push({path:"/preorder"});
    }
  }
}
</script>

<style lang="scss">
  .detail-cnt{
      margin: 0;
      background-color: #ffffff;
      padding-top: 46px;
      padding-bottom: 50px;
  }
  .detail-info{
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    border-top: 1px solid;
    border-color: lightgray;
  }
  .detail-info-title{
    width: 100%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .detail-info-other{
    width: 100%;
    display: flex;
    align-items: center;

  }
  .operate-area{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    background-color: #ffffff;
    border-top: 1px solid;
    border-color: lightgray;
  }
  .shop-icon{
    padding: 10px 0 0 20px;
    display: flex;
    flex-direction: column;
    font-size: 8px;
    align-items: center;
    justify-content: center;

  }
  .detail-btn{
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

  }
  .btn{
      width: 100px;
      height: 35px !important;
      border-radius: 10px !important;
      margin-right: 10px !important;
  }
  .van-tabs__content{
    background-color: #fff;
  }
</style>
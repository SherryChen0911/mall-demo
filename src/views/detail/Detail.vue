<template>
  <van-nav-bar class="nav-bar" title="图书详情" right-text="按钮" left-arrow fixed z-index="10" @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="detail-cnt">
    <van-image :src="currBook.cover_url" alt=""/>
    <div class="detail-info">
      <div class="detail-info-title">{{currBook.title}}</div>
      <div class="detail-info-other">
        <span style="color: #EE0A24; font-size: 12px; font-weight: bold;">￥</span>
        <span style="color: #EE0A24; font-size: 20px; font-weight: bold; padding-right:4px;">{{currBook.price}}</span>
        <span style="text-decoration: line-through; font-size: 12px;">￥10.00</span>
        <span style="flex: 1; text-align: right; font-size: 12px;">销量:{{currBook.sales}}</span>
      </div>
    </div>
    <div style="width:100%;height:10px;background-color:#faf6f6;"></div>
    <van-tabs v-model="active" sticky offset-top="46px">
      <van-tab title="概述">
        <div v-html="currBook.details"></div>
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
        <van-button class="btn" color="linear-gradient(to right, #ffba6a, #FF976A)" @click="addtoCart">加入购物车</van-button>
        <van-button class="btn" color="linear-gradient(to right, #ff6034, #EE0A24)" @click="toPreorder">立即购买</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { Toast } from 'vant';
import {getGoodDetail} from "@/network/detailPage.js";
import {addGoodsToShopcart} from "@/network/shopcartPage.js";

export default {
  name: 'Profile',
  components: {
  },
  data(){
    return {
      active:0,
      currBook:{},
    }
  },
  mounted(){
    let id = this.$route.query.id;
    console.log("id", id);
    getGoodDetail(id)
    .then(
      (res)=>{
        console.log("res",res)
        this.currBook = res.data.goods;
      }
    )
    .catch(
      (err)=>{
        console.log("错误",err)
      }
    );
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
      // this.$router.removeRoute("/index")

    },
    onClickRight(){

    },
    addtoCart(){
      let param = {
        goods_id:this.currBook.id,
        num:"1",
      };
      console.log("addtoCart",param);
      addGoodsToShopcart(param)
      .then(
        (res)=>{
          console.log("res1",res);
          if(res.status == 201 || res.status == 204){
              Toast({
                message:'加入购物车成功！',
                duration:500
            });
          }
        }
      );

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

  .van-tabs__content{
    background-color: #fff;
  }

  img {
    max-width: 100% !important;
    height: auto !important;
}
</style>
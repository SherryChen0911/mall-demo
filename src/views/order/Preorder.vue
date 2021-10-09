<template>
  <div>
    <van-nav-bar class="nav-bar" title="生成订单" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="navbar-palceholder"></div>
    <div class="address">
      <div class="address-area">
        <div style="font-size:18px; margin-bottom:10px;">收货地址</div>
        <div><span style="font-size:16px">{{address.name}}</span><span style="font-size:14px; color:gray; margin-left:10px">{{address.phone}}</span></div>
        <div>{{address.province}} {{address.city}} {{address.county}} {{address.address}}</div>
      </div>
      <van-icon name="arrow" size="20px"/>
    </div>
    <div style="width:100%; height:1px;border-bottom:3px dashed ;border-color: #42b983"></div>
    <div style="width:100% !important;">
      <div class="check-list-item" v-for="(item) in shopList" clickable :key="item.id">
        <van-image fit="contain" :src="item.goods.cover_url" style="width:80px;"/>
        <div class="check-list-cnt">
          <div class="check-list-cnt-title check-list-cnt-other">
            <span>{{item.goods.title}}</span>
            <div><span>×</span><span>{{item.num}}</span></div>
          </div>
          <div><span style="color:red;">￥</span><span style="color:red; font-size:18px">{{Number(item.goods.price).toFixed(2)}}</span></div>
        </div>
      </div>
    </div>
    <div class="tabbar-placeholder"></div>
    <div class="settlement-bar-order">
      <div class="settlement-bar-cnt"><span>合计:</span><span style="color:red">￥</span><span style="color:red;font-size:18px;font-weight:bold;">{{Number(price).toFixed(2)}}</span></div>
      <van-button class="btn" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="createOrder">提交订单</van-button>
    </div>
  </div>
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { orderPreviewAPI,createOrderAPI } from "@/network/orderPage.js";

export default {
  name: 'Index',
  components: {
  },
  data(){
    return {
      address:{},
      shopList:[],
      price:0,
    }
  },
  mounted(){
    orderPreviewAPI()
    .then(
      (res)=>{
        console.log("orderPreviewAPI",res)
        let tempAddress = res.data.address;
        this.address = tempAddress[0];
        for(let i = 0; i < tempAddress.length; i++){
          if (tempAddress[i].is_default == 1) {
            this.address = tempAddress[i];
            break
          }
        }
        this.shopList = res.data.carts;
        this.price = 0;
        for(let j = 0; j < this.shopList.length; j++){
          this.price += this.shopList[j].num* this.shopList[j].goods.price;
        }
      }
    );
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    createOrder(){
      createOrderAPI(this.address.id)
      .then(
        (res)=>{
          console.log("createOrderAPI",res)
        }
      );
    }
  }
}
</script>

<style lang="scss">
  .address{
    width: calc(100% - 20px);
    margin: 10px;
    display: flex;
    align-items: center;
  }
  .address-area{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
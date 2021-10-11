<template>
<div>
  <van-nav-bar class="nav-bar" title="订单详情" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <div class="order-detail-item item-padding">
    <div><span>{{addressData.name}}</span><span style="color:gray; margin-left:20px">{{addressData.phone}}</span></div>
    <div>{{addressData.province}}{{addressData.city}}{{addressData.county}}{{addressData.address}}</div>
  </div>
  <div class="order-detail-num item-padding">
    <div class="order-time">
      <span>订单编号：{{detailData.order_no}}</span>
      <span>订单日期: {{detailData.created_at}}</span>
    </div>
    <div style="flex:1; text-align:center; font-size:18px; font-weight: bold; color:#ff6034;">已完成</div>
  </div>
  <div class="order-detail-item">
    <div class="order-list-item-body" v-for="item in goodsData" :key="item.id">
      <van-image fit="contain" :src="item.goods.cover_url" style="width:80px;"/>
      <div class="check-list-cnt">
        <div class="check-list-cnt-title check-list-cnt-other">
          <span>{{item.goods.title}}</span>
          <div><span>×</span><span>{{item.num}}</span></div>
        </div>
        <div><span style="color:red;">￥</span><span style="color:red; font-size:18px">{{item.goods.price}}</span></div>
      </div>
    </div>
    <div class="order-list-item-price"><span style="margin-right:10px;">总价:</span><span>￥</span><span>{{detailData.orderPrice}}</span></div>
    <div class="ordr-detail-btn-area">
      <van-button class="one-btn" color="linear-gradient(to right, #ff6034, #EE0A24)">立即支付</van-button>  
    </div>
  </div>

</div>
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { getOrderDetailAPI } from "@/network/orderPage.js";

export default {
  name: 'OrderDetail',
  components: {
  },
  data(){
    return {
      addressData:{},
      detailData:{},
      goodsData:[],
      

    }
  },
  created(){
    console.log("created")
    let id = this.$route.query.id;
    console.log("id",id)
    getOrderDetailAPI(id)
    .then(
      (res)=>{
        console.log("getOrderDetailAPI",res)
        this.detailData = res.data;
        this.addressData = res.data.address;
        this.goodsData = res.data.orderDetails.data;
        let orderPrice = 0;
        for(let i = 0; i < this.goodsData.length; i++){
          orderPrice += this.goodsData[i].goods.price * this.goodsData[i].num;
          console.log("orderPrice",orderPrice)
        }
        this.detailData.orderPrice = Number(orderPrice).toFixed(2);
          

      }
    );
  },
  mounted(){
    console.log("mounted")
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
    .order-detail-item{
      margin: 10px 10px 10px 10px;
      padding: 10px 10px 10px 0;
      display: flex;
      flex-direction: column;
      text-align: left;
      background-color: #ffff;
      box-shadow: 1px 1px 3px grey;
      border-radius: 10px;
    }
    .order-detail-num{
      margin: 10px 10px 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      background-color: #ffff;
      box-shadow: 1px 1px 3px grey;
      border-radius: 10px;
    }
    .order-time{
      display: flex;
      flex-direction: column;
    }
    .item-padding{
      padding: 10px;
      font-size: 14px;
    }
    .order-list-item-price{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 10px;

    }
    .ordr-detail-btn-area{
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid lightgray;
    }
</style>
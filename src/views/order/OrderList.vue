<template>
<div>
  <van-nav-bar class="nav-bar" title="订单列表" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <van-tabs v-model="tabValue" sticky offset-top="46px" @change="changeTabValue">
    <van-tab title="全部" name="statusAll">
      <order-list-view :orderList="statusAllList"></order-list-view>
    </van-tab>
    <van-tab title="待支付" name="status1">
      <order-list-view :orderList="status1List"></order-list-view>
    </van-tab>
    <van-tab title="待发货" name="status2">
    </van-tab>
    <van-tab title="待收货" name="status3">
    </van-tab>
    <van-tab title="已完成" name="status4">
    </van-tab>
  </van-tabs>
</div>
  
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import OrderListView from "@/components/OrderListView.vue"
import { getOrderListAPI,getOrderDetailAPI } from "@/network/orderPage.js";

export default {
  name: 'OrderList',
  components: {
    OrderListView
  },
  data(){
    return {
      tabValue: "statusAll",
      statusAllPage:1,
      status1Page:1,
      status2Page:1,
      status3Page:1,
      status4Page:1,
      statusAllList:[],
      status1List:[],
      status2List:[],
      status3List:[],
      status4List:[],
    }
  },
  created(){
    // this.getOrderListType(this.tabValue)
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    changeTabValue(e){
      this.tabValue = e;
      this.getOrderListType(this.tabValue)
    },
    getOrderListType(type){
      let param = {
        include:'user,orderDetails.goods',
      };
      if(type == "statusAll"){
        param.page = this.statusAllPage;
        getOrderListAPI(param)
        .then(
          (res)=>{
            console.log("getOrderListAPI",res)
            this.statusAllList = this.statusAllList.concat(res.data.data);
            this.getOrderTotalPrice(this.statusAllList)
          }
        );
      }
      else if(type == "status1"){
        param.page = this.status1Page;
        param.status = 1;
        getOrderListAPI(param)
        .then(
          (res)=>{
            console.log("getOrderListAPI",res)
            this.status1List = this.status1List.concat(res.data.data);
            this.getOrderTotalPrice(this.status1List)
          }
        );
      }
      else if(type == "status2"){
        param.page = this.status2Page;
        param.status = 2;
        getOrderListAPI(param)
        .then(
          (res)=>{
            console.log("getOrderListAPI",res)
            this.status2List = this.status2List.concat(res.data.data);
            this.getOrderTotalPrice(this.status2List)
          }
        );
      }
      else if(type == "status3"){
        param.page = this.status3Page;
        param.status = 3;
        getOrderListAPI(param)
        .then(
          (res)=>{
            console.log("getOrderListAPI",res)
            this.status3List = this.status3List.concat(res.data.data);
            this.getOrderTotalPrice(this.status3List)
          }
        );
      }
      else if(type == "status4"){
        param.page = this.status4Page;
        param.status = 4;
        getOrderListAPI(param)
        .then(
          (res)=>{
            console.log("getOrderListAPI",res)
            this.status4List = this.status4List.concat(res.data.data);
            this.getOrderTotalPrice(this.status4List)
          }
        );
      }
      console.log("param",param)




    },
    getOrderTotalPrice(orderList){
      for(let a = 0; a < orderList.length; a++){
        let ordergoods = orderList[a].orderDetails.data;
        let orderPrice = 0;
        for(let b = 0; b < ordergoods.length; b++){
          console.log(ordergoods[b])
          orderPrice += ordergoods[b].goods.price * ordergoods[b].num;
          console.log("orderPrice",orderPrice)
        }
        orderList[a].orderPrice = Number(orderPrice).toFixed(2);
      }
    },
    pay(){
      console.log("pay")
    }
  }
}
</script>

<style lang="scss">

</style>
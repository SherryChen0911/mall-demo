<template>
  <div class="order-list-item" v-for="item in orderList" :key="item.order_no" @click="toOrderDetail(item.id)">
    <div>
      <div class="order-list-item-head">
        <span>订单日期: {{item.created_at}}</span>
        <span>订单编号：{{item.order_no}}</span>
      </div>
      <div class="order-list-item-body" v-for="gooditem in item.orderDetails.data" :key="gooditem.goods_id">
        <van-image fit="contain" :src="gooditem.goods.cover_url" style="width:80px;"/>
        <div class="check-list-cnt">
          <div class="check-list-cnt-title check-list-cnt-other">
            <span>{{gooditem.goods.title}}</span>
            <div><span>×</span><span>{{gooditem.num}}</span></div>
          </div>
          <div><span style="color:red;">￥</span><span style="color:red; font-size:18px">{{Number(gooditem.goods.price).toFixed(2)}}</span></div>
        </div>
      </div>
    </div>
    <div class="order-list-item-foot">
      <van-button class="btn" style="border-color: #FF976A; color: #FF976A">去支付</van-button>
      <div>
        <span style="font-size:12px; color:gray;">订单金额：</span><span>￥</span><span style="font-size:18px">{{item.orderPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: "OrderListView",
  props: {
    orderList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex:0,
    };
  },
  created() {
    console.log("enter OrderListView mounted");
  },
  methods: {
    toOrderDetail(orderId){
      this.$router.push({path:"/orderdetail",query:{id:orderId}});
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  background-color: #ffffff;
  width: 100%;
  z-index: 30;

  .tab-control-item {
    flex: 1;
    span {
      padding: 6px;
    }
  }
  .active {
    color: #42b983;
    span {
      border-bottom: 3px solid #42b983;
    }
  }
}
</style>
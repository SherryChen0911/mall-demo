<template>
<div>
  <van-nav-bar class="nav-bar" title="订单列表" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <van-tabs v-model="active" sticky offset-top="46px">
    <van-tab title="全部">
      <div class="order-list-item">
        <div @click="toOrderDetail">
          <div class="order-list-item-head">
            <span>订单日期: 2021-01-01 10:30:00</span>
            <span>订单编号：20210101103000123</span>
          </div>
          <div class="order-list-item-body">
            <van-image fit="contain" :src="require('@/assets/images/33.png')" style="width:80px;"/>
            <div class="check-list-cnt">
              <div class="check-list-cnt-title check-list-cnt-other">
                <span>《产品经理手册》第四版</span>
                <div><span>×</span><span>10</span></div>
              </div>
              <div><span style="color:red;">￥</span><span style="color:red; font-size:18px">100</span></div>
            </div>
          </div>
          <div class="order-list-item-body">
            <van-image fit="contain" :src="require('@/assets/images/33.png')" style="width:80px;"/>
            <div class="check-list-cnt">
              <div class="check-list-cnt-title check-list-cnt-other">
                <span>《产品经理手册》第四版</span>
                <div><span>×</span><span>10</span></div>
              </div>
              <div><span style="color:red;">￥</span><span style="color:red; font-size:18px">100</span></div>
            </div>
          </div>
        </div>
        <div class="order-list-item-foot">
          <van-button class="btn" style="border-color: #FF976A; color: #FF976A" @click="pay">去支付</van-button>
          <div>
            <span style="font-size:12px; color:gray;">订单金额：</span><span>￥</span><span style="font-size:18px">100</span>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="待支付">
    </van-tab>
    <van-tab title="待发货">
    </van-tab>
    <van-tab title="已完成">
    </van-tab>
  </van-tabs>
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
    toOrderDetail(){
      this.$router.push({path:"/orderdetail"});
    },
    pay(){
      console.log("pay")
    }
  }
}
</script>

<style lang="scss">

</style>
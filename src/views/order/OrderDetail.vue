<template>
<div>
  <van-nav-bar class="nav-bar" title="订单详情" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <div class="order-detail-item item-padding">
    <div><span>奔跑的小琳琳</span><span style="color:gray; margin-left:20px">15900001234</span></div>
    <div>福建省福州市鼓楼区香山公寓1号303</div>
  </div>
  <div class="order-detail-num item-padding">
    <div class="order-time">
      <span>订单编号：20210101103000123</span>
      <span>订单日期: 2021-01-01 10:30:00</span>
    </div>
    <div style="flex:1; text-align:center; font-size:18px; font-weight: bold; color:#ff6034;">已完成</div>

  </div>
  <div class="order-detail-item">
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
    <van-button class="btn" color="linear-gradient(to right, #ff6034, #EE0A24)" @click="toPreorder">立即购买</van-button>  
  </div>

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
    .order-detail-item{
      margin: 10px 10px 10px 10px;
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
</style>
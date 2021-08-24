<template>
  <van-nav-bar class="nav-bar" title="生成订单" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="address">
    <div class="address-area">
      <div style="font-size:18px; margin-bottom:10px;">收货地址</div>
      <div><span style="font-size:16px">奔跑的小琳琳</span><span style="font-size:14px; color:gray; margin-left:10px">15900001234</span></div>
      <div>福建省福州市鼓楼区香山公寓1号303</div>
    </div>
    <van-icon name="arrow" size="20px"/>
  </div>

  <div style="width:100%; border:1px dashed ;border-color: #42b983"></div>
  <div style="width = 100% !important;">
    <div class="check-list-item" v-for="(item) in list" clickable :key="item.name">
      <van-image fit="contain" :src="item.src" style="width:80px;"/>
      <div class="check-list-cnt">
        <div class="check-list-cnt-title check-list-cnt-other">
          <span>{{item.name}}</span>
          <div><span>×</span><span>{{item.count}}</span></div>
        </div>
        <div><span style="color:red;">￥</span><span style="color:red; font-size:18px">{{item.price}}</span></div>
      </div>
    </div>
  </div>
  <div class="settlement-bar-order">
    <div class="settlement-bar-cnt"><span>合计:</span><span style="color:red">￥</span><span style="color:red;font-size:18px;font-weight:bold;">100.00</span></div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="width:80px; height:30px; border-radius:15px;">结算</van-button>
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
      list: [
        {id:"1",name:'《细说PHP》第4版',price:'108',src:require('@/assets/images/22.png'),count:1},
        {id:"2",name:'《细说网页制作》',price:'66',src:require('@/assets/images/33.png'),count:1},
        {id:"3",name:'《Java从入门到精通》第二版',price:'100',src:require('@/assets/images/44.png'),count:1},
      ],
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
  .my-swipe{
    // height: 150px;
    background-color: aqua;
  }
  .address{
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
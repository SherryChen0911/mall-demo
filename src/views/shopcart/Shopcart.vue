<template>
  <van-nav-bar class="nav-bar" title="购物车" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <van-checkbox-group v-model="selectResult" style="width = 100% !important;" @click="singleSelect">
      <div class="check-list-item" v-for="(item) in list" clickable :key="item.name">
        <van-checkbox :name="item.id"/>
        <van-image fit="contain" :src="item.src" style="width:80px;"/>
        <div class="check-list-cnt">
          <div class="check-list-cnt-title">{{item.name}}</div>
          <div class="check-list-cnt-other">
            <div><span>￥</span><span>{{item.price}}</span></div>
            <van-stepper v-model="item.count" />
          </div>
        </div>
      </div>
  </van-checkbox-group>
  <div class="settlement-bar">
    <van-checkbox v-model="selectall" @click="selectAll">全选</van-checkbox>
    <div class="settlement-bar-cnt"><span>合计:</span><span style="color:red">￥</span><span style="color:red;font-size:18px;font-weight:bold;">{{total}}</span></div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="width:80px; height:30px; border-radius:15px;" @click="settlement">结算</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: 'Shopcart',
  data() {
    return {
      list: [
        {id:"1",name:'《细说PHP》第4版',price:'108',src:require('@/assets/images/22.png'),count:1},
        {id:"2",name:'《细说网页制作》',price:'66',src:require('@/assets/images/33.png'),count:1},
        {id:"3",name:'《Java从入门到精通》第二版',price:'100',src:require('@/assets/images/44.png'),count:1},
      ],
      selectResult: [],
      selectall: false,
      total:"460.00",
    };
  },
  components: {
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    singleSelect() {
      console.log(this.selectResult)
      if (this.selectResult.length == this.list.length) {
        this.selectall = true;
      }
      else{
        this.selectall = false;
      }
    },
    selectAll(){
      console.log("selectAll",this.selectall);
      this.selectResult = [];
      if (this.selectall == true) {
        for(let i = 0; i < this.list.length; i++){
          this.selectResult.push(this.list[i].id);
        }
      }
      console.log(this.selectResult);
    },
    settlement(){
      this.total++;
    }
  }
}
</script>

<style lang="scss">
.check-list-item{
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
}
.check-list-cnt{
  flex: 1;
  padding: 5px 0;
  display: flex;
  flex-direction: column; 
  text-align: left;
}
.check-list-cnt-title{
  flex: 1;
}
.check-list-cnt-other{
  display: flex;
  align-items: flex-start;
  justify-content: space-between !important;
}
.settlement-bar{
  width: calc(100% - 20px);
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  .van-checkbox__label{
    font-size: 14px;
  }
}
.settlement-bar-cnt{
  flex:1;
  margin-right: 20px;
  text-align: right;
}

</style>
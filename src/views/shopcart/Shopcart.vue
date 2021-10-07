<template>
  <div>
    <van-nav-bar class="nav-bar" title="购物车" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="navbar-palceholder"></div>
    <van-checkbox-group v-model="selectResult" style="width = 100% !important;" @click="singleSelect">
        <div class="check-list-item" v-for="(item) in goodsList" clickable :key="item.name">
          <van-checkbox :name="item.id" />
          <van-image fit="contain" :src="item.url" style="width:80px;"/>
          <div class="check-list-cnt">
            <div class="check-list-cnt-title">{{item.title}}</div>
            <div class="check-list-cnt-other">
              <div><span>￥</span><span>{{item.price}}</span></div>
              <van-stepper v-model="item.num" />
            </div>
          </div>
        </div>
    </van-checkbox-group>
    <!-- <div style="height:500px; background-color:red;margin-bottom:10px">123</div> -->
    <div style="height:50px"></div>
    <div class="settlement-bar">
      <van-checkbox v-model="selectall" @click="selectAll">全选</van-checkbox>
      <div class="settlement-bar-cnt"><span>合计:</span><span style="color:red">￥</span><span style="color:red;font-size:18px;font-weight:bold;">{{total}}</span></div>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="width:80px; height:30px; border-radius:15px;" @click="settlement">结算</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import {addGoodsToShopcart,shopcartList} from "@/network/shopcartPage.js";
import {getGoodDetail} from "@/network/detailPage.js";

export default {
  name: 'Shopcart',
  data() {
    return {
      checkvalue:true,
      goodsList:[],
      list: [
        {id:"1",name:'《细说PHP》第4版',price:'108',src:require('@/assets/images/22.png'),count:1},
        {id:"2",name:'《细说网页制作》',price:'66',src:require('@/assets/images/33.png'),count:1},
        {id:"3",name:'《Java从入门到精通》第二版',price:'100',src:require('@/assets/images/44.png'),count:1},
      ],
      selectResult: [],
      selectall: false,
      total:0,
    };
  },
  mounted(){
    shopcartList()
    .then(
      (res)=>{
        console.log("res",res);
        let tempData = res.data.data;
        if(Array.isArray(tempData)){
          for(let i = 0; i < tempData.length; i++){
            console.log("first",i);
            getGoodDetail(tempData[i].goods_id)
            .then(
              (res)=>{
                console.log("res",i,res)
                this.currBook = res.data.goods;
                tempData[i].title = res.data.goods.title;
                tempData[i].price = res.data.goods.price;
                tempData[i].url = res.data.goods.cover_url;
                if(tempData[i].is_checked == 1){
                  this.selectResult.push(tempData[i].id);
                  let tempTotal = tempData[i].price * tempData[i].num;
                  this.total += tempTotal;

                }
              }
            )
          }
          setTimeout(()=>{
            this.goodsList = tempData;
            if(this.goodsList.length == this.selectResult.length){
              this.selectall = true;
            }
            console.log("goodsList",this.goodsList);
          },3000)

        }
      }
    )
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    singleSelect() {
      console.log(this.selectResult)
      this.total = 0;
      for(let a = 0; a < this.selectResult.length; a++){
        for(let b = 0; b < this.goodsList.length; b++){
          console.log("selectResult",this.selectResult[a]);
          console.log("goodsList",this.goodsList[b].id);
          if(this.selectResult[a] == this.goodsList[b].id){
            console.log("enter same")
            let tempTotal = this.goodsList[b].price * this.goodsList[b].num;
            console.log("tempTotal",tempTotal)
            this.total += tempTotal;
            console.log("total",this.total)
          }
          
        }
      }
      if (this.selectResult.length == this.goodsList.length) {
        this.selectall = true;
      }
      else{
        this.selectall = false;
      }
    },
    selectAll(){
      console.log("selectAll",this.selectall);
      this.selectResult = [];
      this.total = 0;
      if (this.selectall == true) {
        for(let i = 0; i < this.goodsList.length; i++){
          this.selectResult.push(this.goodsList[i].id);
          let tempTotal = this.goodsList[i].price * this.goodsList[i].num;
          this.total += tempTotal;
          
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
</style>
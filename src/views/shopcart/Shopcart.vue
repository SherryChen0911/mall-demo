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
              <van-stepper v-model="item.num" min="0" @change="changeNum(item)"/>
            </div>
          </div>
        </div>
    </van-checkbox-group>
    <!-- <div style="height:500px; background-color:red;margin-bottom:10px">123</div> -->
    <div style="height:50px"></div>
    <div class="settlement-bar">
      <van-checkbox v-model="selectall" @click="selectAll">全选</van-checkbox>
      <div class="settlement-bar-cnt"><span>合计:</span><span style="color:red">￥</span><span style="color:red;font-size:18px;font-weight:bold;">{{total}}</span></div>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" style="width:80px; height:30px; border-radius:15px;" @click="toPreorder">结算</van-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { Dialog,Toast } from 'vant';
import { deleteGoodsToShopcart,changeGoodsCount,changeGoodsSelect,shopcartList } from "@/network/shopcartPage.js";
import { getGoodDetail } from "@/network/detailPage.js";

export default {
  name: 'Shopcart',
  data() {
    return {
      checkvalue:true,
      goodsList:[],
      selectResult: [],
      selectall: false,
      total:0,
    };
  },
  mounted(){
    this.getShopcartList();
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
          if(this.selectResult[a] == this.goodsList[b].id){
            let tempTotal = this.goodsList[b].price * this.goodsList[b].num;
            this.total += tempTotal;
          }
        }
      }
      if (this.selectResult.length == this.goodsList.length) {
        this.selectall = true;
      }
      else{
        this.selectall = false;
      }
      changeGoodsSelect(this.selectResult)
      .then(
        (res)=>{
          console.log("changeGoodsSelect",res)
        }
      );

    },
    selectAll(){
      console.log("selectAll",this.selectall);
      this.selectResult = [];
      this.total = 0;
      if (this.selectall == true) {
        for(let c = 0; c < this.goodsList.length; c++){
          this.selectResult.push(this.goodsList[c].id);
          let tempTotal = this.goodsList[c].price * this.goodsList[c].num;
          this.total += tempTotal;
        }
      }
      console.log(this.selectResult);
      changeGoodsSelect(this.selectResult)
      .then(
        (res)=>{
          console.log("changeGoodsSelect",res)
        }
      );
    },
    getShopcartList(){
      Toast.loading({
        message: '加载中...',
        duration:5000,
        forbidClick: true,
      });
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
            },5000)
          }
        }
      )
    },
    changeNum(item){
      console.log(item.num)
      if (item.num == "0") {
        Dialog.confirm({
          message: '是否从购物车删除该商品? ',
        })
          .then(() => {
            console.log("确定")
            deleteGoodsToShopcart(item.id)
            .then(
              (res)=>{
                console.log("res",res);
                if(res.status == 204){
                  for(let j = 0; j < this.goodsList.length; j++){
                    console.log("search id:",this.goodsList[j].id)
                    if(this.goodsList[j].id == item.id){
                      console.log("enter same")
                      this.goodsList.splice(j,1);
                      break;
                    }
                  }
                  console.log("new list",this.goodsList)
                  Toast({
                    message:'商品删除成功!',
                    duration:500
                  });
                }
              }
            );
          })
          .catch(() => {
            item.num = "1";
            console.log("取消")
          });
      }
      else{
        Toast.loading({
          message: '加载中...',
          duration:1000,
          forbidClick: true,
        });
        changeGoodsCount(item.id,item.num)
        .then(
          (res)=>{
            console.log(res)
          }
        );
      }
    },

    //跳转订单预览页
    toPreorder(){
      this.$router.push({path:"/preorder"});
    }
  }
}
</script>

<style lang="scss">
</style>
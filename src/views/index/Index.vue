<template>
  <div>
    <van-nav-bar class="nav-bar" title="图书兄弟" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="navbar-palceholder"></div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="my-swipe-item" v-for="item in slides" :key="item.id">
        <van-image class="my-img" fit="contain" :src="item.img_url"/>
      </van-swipe-item>
    </van-swipe>

    <recommend-view :recommends="goods"></recommend-view>
    <tab-control class="tab-card" :titles="['畅销', '新书', '精选']" @tabClick="indexTabClick"></tab-control>
    <van-list class="tab-view" v-if="tabSelect == 0" v-model:loading="loading" :finished="finished" finished-text="没有更多了" offset="50" :immediate-check="immediateCheck" @load="getTabGoods(tabType,salePage)">
      <goods-list-view :goodList="saleGoods"></goods-list-view>
    </van-list>
    <van-list class="tab-view" v-if="tabSelect == 1" v-model:loading="loading" :finished="finished" finished-text="没有更多了" offset="50" :immediate-check="immediateCheck" @load="getTabGoods(tabType,newPage)">
      <goods-list-view :goodList="newGoods"></goods-list-view>
    </van-list>
    <van-list class="tab-view" v-if="tabSelect == 2" v-model:loading="loading" :finished="finished" finished-text="没有更多了" offset="50" :immediate-check="immediateCheck" @load="getTabGoods(tabType,collectPage)">
      <goods-list-view :goodList="collectGoods"></goods-list-view>
    </van-list>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import "@/assets/iconfont.css"
import RecommendView from "@/components/RecommendView.vue"
import TabControl from "@/components/TabControl.vue"
import GoodsListView from "@/components/GoodsListView.vue"
import { getHomeAllData, getHomeGoods } from "@/network/indexPage.js"

export default {
  name: 'Index',
  components: {
    RecommendView,
    GoodsListView,
    TabControl,
    scroll:{},
  },
  data(){
    return {
      tabSelect: 0,
      loading: false,
      finished: false,
      immediateCheck:false,
      slides:[],
      goods:[],
      saleGoods:[],
      newGoods:[],
      collectGoods:[],
      salePage:2,
      newPage:1,
      collectPage:1,
      tabType:"sales",
    }
  },
  created(){
    getHomeAllData()
    .then(
      (res)=>{
        this.slides = res.data.slides;
        this.goods = res.data.goods.data;
        this.saleGoods = res.data.goods.data
        console.log("slides",this.slides)
        console.log("goods",this.goods)
      }
    )
    .catch(
      (err)=>{
        console.log(err)
      }
    );
  },
  mounted(){
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    indexTabClick(emitData){
      console.log("emitData",emitData);
      this.tabSelect = emitData;
      if(emitData == 0){
        this.tabType = "sales" 
      }
      else if(emitData == 1){
        this.tabType = "new";
        if (this.newGoods.length == 0) {
          this.getTabGoods(this.tabType,this.newPage);
        }
      }
      else if(emitData == 2){
        this.tabType = "recommend";
        if (this.collectGoods.length == 0) {
          this.getTabGoods(this.tabType,this.collectPage);
        }
      }
    },
    getTabGoods(type,page){
      console.log("getTabGoods",type,page)
      getHomeGoods(type,page)
      .then(
        (res)=>{
          console.log("getTabGoods:",res)
          //热销
          if(type == "sales"){
            this.saleGoods = this.saleGoods.concat(res.data.goods.data);
            this.salePage++;
            console.log("saleGoods",this.saleGoods);
            console.log("salePage",this.salePage);
          }
          //新书
          else if (type == "new") {
            this.newGoods = this.newGoods.concat(res.data.goods.data);
            this.newPage++;
            console.log("newGoods",this.newGoods);
            console.log("newPage",this.newPage);
          }
          //精选
          else if (type == "recommend") {
            this.collectGoods = this.collectGoods.concat(res.data.goods.data);
            this.collectPage++;
            console.log("collectGoods",this.collectGoods);
            console.log("collectPage",this.collectPage);
          }
          this.loading = false;
        }
      )
      .catch(
        (err)=>{
          
        }
      )
    },
    toDetail(){
      this.$router.push({path:"/detail"})

    },

  }
}
</script>

<style lang="scss">
  .my-swipe{
    width: 100%;
    height: 160px;
  }
  .my-swipe-item{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .my-img{
    width: 100%;
    height: 160px;
  }
  .tab-card{
    position: sticky;
    top: 45px;
    z-index: 10;
  }
  .tab-view{
    width: 100%;
  }
</style>
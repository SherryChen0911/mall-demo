<template>
  <div>
    <van-nav-bar class="nav-bar" title="分类" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
    <div class="navbar-palceholder"></div>
    <van-row>
      <van-col class="side-bar" span="8">
        <van-collapse v-model="sidebarSelect" @change="changeSelect" accordion>
          <van-collapse-item :title="item.name" :name="index" v-for="(item, index) in categoryList" :key="item.id">
            <van-sidebar v-if="sidebarSelect == index"  v-model="sidebarItemSelect"  @change="changeSelectItem">
              <van-sidebar-item :title="childItem.name" v-for="childItem in item.children" :key="childItem.id"/>
            </van-sidebar>
          </van-collapse-item>
          </van-collapse>
      </van-col>

      <van-col class="side-cnt" span="16">
          <van-tabs v-model="tabSelect" @change="changeTab">
            <van-loading v-if="loadingIcon" type="spinner" />
            <van-tab title="销量排序" name="sales">
              <van-list v-if="tabSelect == 0" v-model:loading="salesLoading" :finished="salesFinished" finished-text="没有更多了" offset="50" :immediate-check="immediateCheck" @load="getMoreData('sales')">
                <div class="list-item" v-for="item in currSalesList" :key="item.id"> 
                  <van-image fit="contain" :src="item.cover_url" style="width:80px;"/>
                  <div class="list-item-cnt">
                    <div class="list-item-cnt-body">
                      <span>{{item.title}}</span>
                      <span>{{item.updated_at}}</span>
                    </div>
                    <div class="list-item-cnt-other"><span>￥</span><span style="font-size:14px;padding-right:4px;">{{item.price}}</span><span style="text-decoration:line-through;flex:1;">￥10.00</span><span>销量:{{item.sales}}</span></div>
                  </div>
                </div>
              </van-list>
            </van-tab>
            <van-tab title="价格排序" name="price">
              <van-list v-if="tabSelect == 0" v-model:loading="priceLoading" :finished="priceFinished" finished-text="没有更多了" offset="50" :immediate-check="immediateCheck" @load="getMoreData('price')">
                <div class="list-item" v-for="item in currPriceList" :key="item.id"> 
                  <van-image fit="contain" :src="item.cover_url" style="width:80px;"/>
                  <div class="list-item-cnt">
                    <div class="list-item-cnt-body">
                      <span>{{item.title}}</span>
                      <span>{{item.updated_at}}</span>
                    </div>
                    <div class="list-item-cnt-other"><span>￥</span><span style="font-size:14px;padding-right:4px;">{{item.price}}</span><span style="text-decoration:line-through;flex:1;">￥10.00</span><span>销量:{{item.sales}}</span></div>
                  </div>
                </div>
              </van-list>
            </van-tab>
            <van-tab title="评论排序" name="comments_count">
              <van-list v-if="tabSelect == 0" v-model:loading="commentLoading" :finished="commentFinished" finished-text="没有更多了" offset="50" :immediate-check="immediateCheck" @load="getMoreData('comments_count')">
                <div class="list-item" v-for="item in currCommentList" :key="item.id"> 
                  <van-image fit="contain" :src="item.cover_url" style="width:80px;"/>
                  <div class="list-item-cnt">
                    <div class="list-item-cnt-body">
                      <span>{{item.title}}</span>
                      <span>{{item.updated_at}}</span>
                    </div>
                    <div class="list-item-cnt-other"><span>￥</span><span style="font-size:14px;padding-right:4px;">{{item.price}}</span><span style="text-decoration:line-through;flex:1;">￥10.00</span><span>销量:{{item.sales}}</span></div>
                  </div>
                </div>
              </van-list>
            </van-tab>
          </van-tabs>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { getCategoryAllData, getTypeGoods } from "@/network/categoryPage.js"

export default {
  name: 'Category',
  data(){
    return {
      loadingIcon: true,
      tabSelect: 0,
      sidebarSelect: 0,
      sidebarItemSelect: 0,
      categoryList:[],
      currChildList:[],
      currCategory: -1,
      currSalesList:[],
      currPriceList:[],
      currCommentList:[],
      currSalesPage:1,
      currPricePage:1,
      currCommentPage:1,
      salesLoading: false,
      salesFinished: false,
      priceLoading: false,
      priceFinished: false,
      commentLoading: false,
      commentFinished: false,
      immediateCheck:false,
    }
  },
  components: {
  },
  mounted(){
    getCategoryAllData()
    .then(
      (res)=>{
        console.log("res",res)
        this.categoryList = res.data.categories;
        this.currChildList = this.categoryList[0].children
        this.currCategory = this.currChildList[0].id;
        console.log("categoryList:",this.categoryList)
        console.log("currChildList:",this.currChildList)
        console.log("sidebarSelect",this.sidebarSelect)
        console.log("currCategory",this.currCategory)
        this.getTabsData();
      }
    )
    .catch(
      (err)=>{
        console.log(err)
      }
    );
  },
  methods:{
    //切换一级目录
    changeSelect(e){
      //获取一级目录序号
      this.sidebarSelect = e;
      //获取二级目录列表
      this.currChildList = this.categoryList[e].children;
      console.log("currChildList",this.currChildList)
      //默认二级目录第一个元素选中
      this.sidebarItemSelect = 0;
      //设置当前选中目录
      this.currCategory = this.currChildList[0].id;
      console.log("currCategory",this.currCategory)
      //获取数据
      this.getTabsData();
      this.tabSelect = 0;
    },

    //切换二级目录
    changeSelectItem(e){
      //设置当前选中目录
      this.currCategory = this.currChildList[e].id;
      console.log("currCategory",this.currCategory)
      //获取数据
      this.getTabsData();
      this.tabSelect = 0;
    },

    //切换tab
    changeTab(e){
      console.log("e",e)
    },

    //切换目录后获取数据
    getTabsData(){
      this.loadingIcon = true;
      //切换目录后需要把销量、价格、评论列表全部重新获取数据，故将对应列表置为空，将对应当前页数置为1
      this.currSalesList=[];
      this.currPriceList=[];
      this.currCommentList=[];
      this.currSalesPage=1;
      this.currPricePage=1;
      this.currCommentPage=1;
      //请求当前目录下所有书籍
      getTypeGoods(this.currCategory,this.currSalesPage,'sales')
      .then(
        (res)=>{
          console.log("getTypeGoods",res)
          this.currSalesList = res.data.goods.data;
          this.currSalesPage++;
          this.loadingIcon = false;
        }
      )
      .catch(
        (err)=>{
          console.log(err)
        }
      );
      getTypeGoods(this.currCategory,this.currPricePage,'price')
      .then(
        (res)=>{
          console.log("getTypeGoods",res)
          this.currPriceList = res.data.goods.data;
          this.currPricePage++;
        }
      )
      .catch(
        (err)=>{
          console.log(err)
        }
      );
      getTypeGoods(this.currCategory,this.currCommentPage,'comments_count')
      .then(
        (res)=>{
          console.log("getTypeGoods",res)
          this.currCommentList = res.data.goods.data;
          this.currCommentPage++;
        }
      )
      .catch(
        (err)=>{
          console.log(err)
        }
      );
    },

    //上拉加载
    getMoreData(type){
      console.log("type",type)
      if(type == 'sales'){
        getTypeGoods(this.currCategory,this.currSalesPage,type)
        .then(
          (res)=>{
            console.log("getTypeGoods:",type,res)
            console.log("length",res.data.goods.data.length)
            if (res.data.goods.data.length > 0) {
              this.currSalesList = this.currSalesList.concat(res.data.goods.data);
              this.currSalesPage++;
            }
            else{
              this.salesFinished = true;
            }
            this.salesLoading = false;
          }
        )
        .catch(
          (err)=>{
            console.log(err)
          }
        );
      }
      else if(type == 'price'){
        getTypeGoods(this.currCategory,this.currPricePage,type)
        .then(
          (res)=>{
            console.log("getTypeGoods:",type,res)
            console.log("length",res.data.goods.data.length)
            if (res.data.goods.data.length > 0) {
              this.currPriceList = this.currPriceList.concat(res.data.goods.data);
              this.currPricePage++;
            }
            else{
              this.priceFinished = true;
            }
            this.priceLoading = false;
          }
        )
        .catch(
          (err)=>{
            console.log(err)
          }
        );
      }
      else if(type == 'comments_count'){
        getTypeGoods(this.currCategory,this.currCommentPage,type)
        .then(
          (res)=>{
            console.log("getTypeGoods:",type,res)
            console.log("length",res.data.goods.data.length)
            if (res.data.goods.data.length > 0) {
              this.currCommentList = this.currCommentList.concat(res.data.goods.data);
              this.currCommentPage++;
            }
            else{
              this.commentFinished = true;
            }
            this.commentLoading = false;
          }
        )
        .catch(
          (err)=>{
            console.log(err)
          }
        );
      }
    },

    onClickLeft(){
    this.$router.go(-1)

    },

    onClickRight(){

    }
  }
}
</script>

<style lang="scss">
  .list-item{
    height: 80px;
    // background-color: darkkhaki;
    margin:  5px 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgb(250, 246, 246);
    border-radius: 5px;
  }
  .list-item-cnt{
    height: 80px;
    padding-left: 3px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    // background-color: blueviolet;
    font-size: 12px;
  }
  .list-item-cnt-body{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
  .list-item-cnt-other{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
</style>
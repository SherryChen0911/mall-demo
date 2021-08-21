<template>
  <van-nav-bar class="nav-bar" title="分类" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <van-row>
    <van-col class="side-bar" span="8">
      <van-collapse v-model="sidebarSelect">
      <van-collapse-item title="后端" name="1">
        <van-sidebar v-model="sidebarItemSelect">
          <van-sidebar-item title="Java" />
          <van-sidebar-item title="PHP" />
          <van-sidebar-item title="Python" />
        </van-sidebar>
      </van-collapse-item>
      <van-collapse-item title="前端" name="2">
          <van-sidebar v-model="sidebarItemSelect1">
          <van-sidebar-item title="Vue" />
          <van-sidebar-item title="React" />
          <van-sidebar-item title="Angular" />
        </van-sidebar>
      </van-collapse-item>
      <van-collapse-item title="前沿" name="3">
      </van-collapse-item>
      </van-collapse>
    </van-col>
    <van-col class="side-cnt" span="16">
        <van-tabs v-model="tabSelect">
          <van-tab title="销量排序">
            <div class="list-item">
              <van-image fit="contain" :src="require('@/assets/images/11.png')" style="width:80px;"/>
              <div class="list-item-cnt">
                <div class="list-item-cnt-body">
                  <span>《产品经理手册》第2版</span>
                  <span>2021-09-04</span>
                </div>
                <div class="list-item-cnt-other"><span>￥</span><span style="font-size:14px;padding-right:4px;">78</span><span style="text-decoration:line-through;flex:1;">￥10.00</span><span>销量:10</span></div>
              </div>
            </div>
            <div class="list-item">
              <van-image fit="contain" :src="require('@/assets/images/11.png')" style="width:80px;"/>
              <div class="list-item-cnt">
                <div class="list-item-cnt-body">
                  <span>《产品经理手册》第2版</span>
                  <span>2021-09-04</span>
                </div>
                <div class="list-item-cnt-other"><span>￥</span><span style="font-size:14px;padding-right:4px;">78</span><span style="text-decoration:line-through;flex:1;">￥10.00</span><span>销量:10</span></div>
              </div>
            </div>
            <div class="list-item">
              <van-image fit="contain" :src="require('@/assets/images/11.png')" style="width:80px;"/>
              <div class="list-item-cnt">
                <div class="list-item-cnt-body">
                  <span>《产品经理手册》第2版</span>
                  <span>2021-09-04</span>
                </div>
                <div class="list-item-cnt-other"><span>￥</span><span style="font-size:14px;padding-right:4px;">78</span><span style="text-decoration:line-through;flex:1;">￥10.00</span><span>销量:10</span></div>
              </div>
            </div>
          </van-tab>
          <van-tab title="价格排序">
            
          </van-tab>
          <van-tab title="评论排序">
            
          </van-tab>
        </van-tabs>
    </van-col>
  </van-row>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: 'Category',
  data(){
    return {
      tabSelect: 0,
      sidebarSelect: [],
      sidebarItemSelect: 0,
      sidebarItemSelect1: 0,
    }
  },
  components: {
  },
  methods:{
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
  }
  .list-item-cnt-other{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
</style>
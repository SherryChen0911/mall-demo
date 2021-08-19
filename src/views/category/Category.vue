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
        <view>a</view>
        <view>a</view>
        <view>a</view>
      </van-collapse-item>
      <van-collapse-item title="前沿" name="3">
      </van-collapse-item>
      </van-collapse>
    </van-col>
    <van-col class="side-cnt" span="16">
        <van-tabs v-model="tabSelect">
          <van-tab title="销量排序">
            <view class="list-item">
              <van-image fit="contain" :src="require('@/assets/images/11.png')" style="width:100px; hight:100px"/>



            </view>
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
    }
  },
  components: {
  },
  methods:{
    onClickLeft(){

    },
    onClickRight(){

    }
  }
}
</script>

<style lang="scss">
  .list-item{
    background-color: darkkhaki;
    margin:  5px 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
</style>
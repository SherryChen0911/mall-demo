<template>
  <van-nav-bar class="nav-bar" title="购物车" left-text="返回" right-text="按钮" left-arrow  @click-left="onClickLeft" @click-right="onClickRight"/>
  <van-checkbox-group v-model="result">
    <van-cell-group>
      <div v-for="(item) in list" clickable :key="item.name" @click="toggle">
        <van-checkbox :name="item.name"/>
        <van-image fit="contain" :src="item.src" style="width:80px;"/>
        <div>
          <div>{{item.name}}</div>
          <div>
            <div><span>￥</span><span>{{item.price}}</span></div>
          </div>
        </div>
      </div>
    </van-cell-group>
  </van-checkbox-group>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: 'Shopcart',
  data() {
    return {
      list: [
        {name:'《细说PHP》第4版',price:'108',src:require('@/assets/images/22.png')},
        {name:'《细说网页制作》',price:'66',src:require('@/assets/images/33.png')},
        {name:'《Java从入门到精通》第二版',price:'100',src:require('@/assets/images/44.png')},
      ],
      result: [],
    };
  },
  components: {
  },
  methods:{
    onClickLeft(){

    },
    onClickRight(){

    },
    toggle() {
      console.log(this.result)
    },
  }
}
</script>

<style lang="scss">
</style>
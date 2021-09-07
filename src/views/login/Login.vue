<template>
<div>
  <van-nav-bar class="nav-bar" title="登录注册" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <div class="login-form-view">
    <van-image fit="contain" :src="require('@/assets/logo.png')" style="width:100px;"/>
    <van-tabs class="login-tabs" v-model="loginSelect" color="#42b983">
      <van-tab title="登&nbsp;&nbsp;录">
        <div class="form-item login-border">
          <span class="form-item-prefix">账号</span>
          <input class="form-item-cnt" type="text" placeholder="请输入账号" style="border:none; height:20px;">
        </div>
        <div class="form-item login-border">
          <span class="form-item-prefix">密码</span>
          <input class="form-item-cnt" type="password" placeholder="请输入密码" style="border:none; height:20px;">
        </div>
        <van-button class="one-btn" color="#42b983">登&nbsp;录</van-button>
      </van-tab>
      <van-tab title="注&nbsp;&nbsp;册">
        <div class="form-item login-border">
          <span class="form-item-prefix">账号</span>
          <input class="form-item-cnt" type="text" placeholder="请输入账号" style="border:none; height:20px;">
        </div>
        <div class="form-item login-border">
          <span class="form-item-prefix">密码</span>
          <input class="form-item-cnt" type="password" placeholder="请输入密码" style="border:none; height:20px;">
        </div>
        <div class="form-item login-border">
          <span class="form-item-prefix">确认密码</span>
          <input class="form-item-cnt" type="password" placeholder="请再次输入密码" style="border:none; height:20px;">
        </div>
        <van-button class="one-btn" color="#42b983">注&nbsp;册</van-button>
      </van-tab>
    </van-tabs>
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
      loginSelect:0,
      loginData:{
        account:'',
        psw:'',
      },
      registerData:{
        account:'',
        psw:'',
        pswChenck:'',
      },
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
  .login-form-view{
    margin: 50px 20px 0 20px;
    font-size: 14px;
    .login-tabs{
      margin-top: 20px;
    }
    .van-tabs__nav--card{
      margin: 0 !important;
    }
  }
  .login-border{
    border-bottom: 1px solid lightgray;
  }
  // .form-item{
  //   padding: 20px;
  //   display: flex;
  //   justify-content: flex-start;
  // }
  // .form-item-prefix{
  //   width: 100px;
  //   text-align: left;
  // }
  // .form-item-cnt{
  //   flex: 1;
  //   text-align: left;
  // }
  // .form-item-suffix{
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: center;
  // }

</style>
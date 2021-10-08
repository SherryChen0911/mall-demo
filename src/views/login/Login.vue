<template>
<div>
  <van-nav-bar class="nav-bar" title="登录注册" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <div class="login-form-view">
    <van-image fit="contain" :src="require('@/assets/logo.png')" style="width:100px;"/>
    <van-tabs class="login-tabs" v-model="loginSelect" color="#42b983" @change="changeTab">
      <van-tab title="登&nbsp;&nbsp;录">
        <van-form class="login-form" @submit="userLogin">
          <van-field v-model="loginData.email" name="email" label="账号" placeholder="请输入账号" :rules="[{ required: true, message: '请填写用户名' }]"/>
          <van-field v-model="loginData.password" name="password" type="password" label="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]"/>
          <van-button class="one-btn" color="#42b983" native-type="submit">登&nbsp;录</van-button>
        </van-form>
      </van-tab>
      <van-tab title="注&nbsp;&nbsp;册">
        <van-form class="login-form" @submit="userRegister">
          <van-field v-model="registerData.name" name="name" label="账号" placeholder="请输入账号" :rules="[{ required: true, message: '请填写用户名' }]"/>
          <van-field v-model="registerData.password" name="password" type="password" label="密码" placeholder="请输入密码" :rules="[{ required: true, pattern:pwsPattern, message: '请填写密码' }]"/>
          <van-field v-model="registerData.password_confirmation" type="password" name="password_confirmation" label="确认密码" placeholder="请再次输入密码" :rules="[{ required: true, message: '请填写一致密码',validator: trysame }]"/>
          <van-field v-model="registerData.email" name="email" label="电子邮箱"  placeholder="请输入正确电子邮箱格式" :rules="[{ required: true, message: '请输入正确电子邮箱格式' }]" />
          <van-button class="one-btn" color="#42b983" native-type="submit">注&nbsp;册</van-button>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>
</div>
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { register, login } from "@/network/loginPage.js"
import { Toast } from 'vant';

export default {
  name: 'Index',
  components: {
  },
  data(){
    return {
      loginSelect:0,
      pwsPattern:/^[a-z0-9_-]{6,18}$/,
      loginData:{
        email:'',
        password:'',
      },
      registerData:{
        name:'',
        password:'',
        password_confirmation:'',
        email:''
      },
    }
  },
  created(){

  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    trysame(){
      let result = false
      if(this.registerData.password == this.registerData.password_confirmation){
        result = true;
      }
      console.log(result)
      return result;
    },
    userLogin(){
      console.log(this.loginData)
      login(this.loginData)
      .then((res)=>{
        console.log("res",res)
        if(res.status == 200){
          window.localStorage.setItem('token',res.data.access_token);
          Toast({
            message:'登录成功！',
            duration:500
          });
          setTimeout(()=>{
            this.$router.go(-1);
            // this.$router.push({path:'/'});
          },500);
          
        }
      })
    },
    userRegister(){
      console.log(this.registerData)
      register(this.registerData)
      .then((res)=>{
        console.log("res",res)
        if(res.status == 201){
          Toast('注册成功！请登录！');

        }
      })
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
      .login-form{
        margin-top: 20px;
      }
    }
    .van-tabs__nav--card{
      margin: 0 !important;
    }
  }
</style>
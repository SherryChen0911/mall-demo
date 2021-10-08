<template>
<div>
  <van-nav-bar class="nav-bar" title="添加地址" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <van-form class="form-view" @submit="addUserAddress">
    <van-field v-model="addressData.name" name="name" label="姓名" placeholder="请填写收件人姓名" :rules="[{ required: true, message: '请填写收件人姓名' }]"/>
    <van-field v-model="addressData.phone" type="tel" name="phone" label="电话" placeholder="请填写收件人电话" :rules="[{ required: true, message: '请填写收件人电话' }]"/>
    <div class="form-item">
      <span class="form-item-prefix">地区</span>
      <input class="form-item-cnt" v-model="addressData.province" type="text" placeholder="省" style="border:none; height:20px;">
      <input class="form-item-cnt" v-model="addressData.city" type="text" placeholder="市" style="border:none; height:20px;">
      <input class="form-item-cnt" v-model="addressData.county" type="text" placeholder="区" style="border:none; height:20px;">
      <!-- <van-field class="form-item-cnt" v-model="addressData.province" name="phone" placeholder="省" :rules="[{ required: true, message: '请填写收件人电话' }]"/>
      <van-field class="form-item-cnt" v-model="addressData.city" name="phone" placeholder="市" :rules="[{ required: true, message: '请填写收件人电话' }]"/>
      <van-field class="form-item-cnt" v-model="addressData.county" name="phone" placeholder="区" :rules="[{ required: true, message: '请填写收件人电话' }]"/> -->
      <!-- <span class="form-item-cnt">北京 北京市 西城区</span> -->
    </div>
    <van-field v-model="addressData.address" type="tel" name="address" label="详细地址" placeholder="请填写详细地址" :rules="[{ required: true, message: '请填写收件人详细地址' }]"/>
    <div class="form-item">
      <span class="form-item-cnt">设为默认地址</span>
      <div class="form-item-suffix">
        <van-switch size="20px" active-color="#42b983" v-model="checked" />
      </div>
    </div>
    <van-button class="one-btn" color="#42b983" native-type="submit">保存</van-button>
    <van-button class="one-btn" color="#ffffff" style="color:#2C3E50; border: 1px solid lightgray;">取消</van-button>
  </van-form>
</div>
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { Toast } from 'vant';
import { addAddress } from "@/network/addressPage.js"

export default {
  name: 'Index',
  components: {
  },
  data(){
    return {
      checked:false,
      addressData:{},
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
    addUserAddress(e){
      if(this.checked == true){
        this.addressData.is_default = 1;
      }
      else{
        this.addressData.is_default = 0;
      }
      console.log(this.addressData)
      console.log(this.checked)
      addAddress(this.addressData)
      .then(
        (res)=>{
          console.log("addAddress",res)
          if(res.status == 201){
            Toast({
              message:'收货地址添加成功！',
              duration:500
            });
            setTimeout(()=>{
              this.$router.go(-1);
            },500);
          }
        }
      );


    }
  }
}
</script>

<style lang="scss">
  .form-view{
    width: 100%;
  }
  .form-item{
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    font-size: 14px;
  }
  .form-item-prefix{
    width: 100px;
    text-align: left;
  }
  .form-item-cnt{
    width: 80px;
    text-align: left;
  }
  .form-item-suffix{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

</style>
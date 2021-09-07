<template>
<div>
  <van-nav-bar class="nav-bar" title="编辑地址" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <div class="form-view">
    <div class="form-item">
      <span class="form-item-prefix">姓名</span>
      <span class="form-item-cnt">陈琳</span>
    </div>
    <div class="form-item">
      <span class="form-item-prefix">电话</span>
      <span class="form-item-cnt">15900001111</span>
    </div>
    <div class="form-item">
      <span class="form-item-prefix">地区</span>
      <span class="form-item-cnt">北京 北京市 西城区</span>
      <div class="form-item-suffix">
        <van-icon name="arrow" size="20px"/>
      </div>
    </div>
    <div class="form-item">
      <span class="form-item-prefix">详细地址</span>
      <span class="form-item-cnt">花园小区1号楼505室</span>
    </div>
    <div class="form-item">
      <span class="form-item-cnt">设为默认地址</span>
      <div class="form-item-suffix">
        <van-switch size="20px" active-color="#42b983" v-model="checked" />
      </div>
    </div>
    <van-button class="one-btn" color="#42b983">保存</van-button>
    <van-button class="one-btn" color="#ffffff" style="color:#2C3E50; border: 1px solid lightgray;">删除</van-button>
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
      checked:false,
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
  .form-view{
    width: 100%;
  }
  .form-item{
    padding: 20px;
    display: flex;
    justify-content: flex-start;
  }
  .form-item-prefix{
    width: 100px;
    text-align: left;
  }
  .form-item-cnt{
    flex: 1;
    text-align: left;
  }
  .form-item-suffix{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

</style>
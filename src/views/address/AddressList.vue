<template>
<div>
  <van-nav-bar class="nav-bar" title="地址管理" left-text="返回" right-text="按钮" left-arrow fixed @click-left="onClickLeft" @click-right="onClickRight"/>
  <div class="navbar-palceholder"></div>
  <div class="address-item" v-for="item in addressList" :key="item.id">
    <div class="address-cnt">
      <div>
        <span class="address-span">{{item.name}}</span>
        <span class="address-span">{{item.tel}}</span>
        <span class="address-span">默认</span>
      </div>
      <div>
        <span class="address-span">{{item.address}}</span>
      </div>
    </div>
    <div class="address-icon" @click="toAddressDetail">
      <van-icon name="edit" size="20px"/>
    </div>
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
      addressList:[
        {
          id:1,
          name: "陈1琳",
          tel: "15900001111",
          address: "北京 北京市 西城区 花园小区1号楼505室"
        },
        {
          id:2,
          name: "陈2琳",
          tel: "15900001111",
          address: "北京 北京市 西城区 花园小区1号楼505室"
        },
        {
          id:3,
          name: "陈3琳",
          tel: "15900001111",
          address: "北京 北京市 西城区 花园小区1号楼505室"
        },
        {
          id:4,
          name: "陈4琳",
          tel: "15900001111",
          address: "北京 北京市 西城区 花园小区1号楼505室"
        },
      ],
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){

    },
    toAddressDetail(){
      this.$router.push({path:"/addressdetail"})
    }
  }
}
</script>

<style lang="scss">
  .address-item{
    display: flex;
    padding: 12px;
  }
  
  .address-cnt{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
  }
  
  .address-span{
    margin-right: 10px;
  }

  .address-icon{
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
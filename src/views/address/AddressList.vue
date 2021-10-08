<template>
<div>
  <van-nav-bar class="nav-bar" title="地址管理" left-text="返回" right-text="添加地址" left-arrow fixed @click-left="onClickLeft" @click-right="toAddressAdd"/>
  <div class="navbar-palceholder"></div>
  <div class="address-item" v-for="item in addressList" :key="item.id">
    <div class="address-cnt">
      <div>
        <span class="address-span">{{item.name}}</span>
        <span class="address-span">{{item.phone}}</span>
        <span v-if="item.is_default == 1" class="address-span">默认</span>
      </div>
      <div>
        <span class="address-span">{{item.province}}</span>
        <span class="address-span">{{item.city}}</span>
        <span class="address-span">{{item.county}}</span>
        <span class="address-span">{{item.address}}</span>
      </div>
    </div>
    <div class="address-icon" @click="toAddressDetail(item.id)">
      <van-icon name="edit" size="20px"/>
    </div>
  </div>
</div>
</template> 

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import { getAddressList } from "@/network/addressPage.js"

export default {
  name: 'Index',
  components: {
  },
  data(){
    return {
      addressList:[],
    }
  },
  mounted(){
    getAddressList()
    .then(
      (res)=>{
        console.log("getAddressList",res)
        this.addressList = res.data.data;
      }
    );
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    toAddressAdd(){
      this.$router.push({path:"/addressadd"})
    },
    toAddressDetail(id){
      this.$router.push({path:"/addressdetail",query:{id:id}})
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
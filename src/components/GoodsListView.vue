<template>
  <div class="column2-row">
    <div class="column2-row-item" v-for="item in goodList" :key="item.id" @click="toDetail"> 
      <van-image :src="item.cover_url" alt=""/>
      <div class="column2-row-item-name">{{item.title}}</div>
      <div class="column2-row-item-tip">
        <span class="column2-row-item-tip-item">￥{{item.price}}</span>
        <span class="column2-row-item-tip-item">销量{{item.sales}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: "GoodsListView",
  props: {
    goodList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    console.log("enter GoodsListView mounted");
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
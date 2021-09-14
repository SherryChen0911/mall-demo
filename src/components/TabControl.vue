<template>
  <div>
    <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in titles" :key="index" @click = "itemClick(index)" :class="index == currentIndex ?'tab-control-item active':'tab-control-item'">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";

export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex:0,
    };
  },
  mounted() {
    console.log("enter TabControl mounted");
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      console.log("index",index);
      this.$emit('tabClick', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  background-color: #ffffff;
  width: 100%;
  z-index: 30;

  .tab-control-item {
    flex: 1;
    span {
      padding: 6px;
    }
  }
  .active {
    color: #42b983;
    span {
      border-bottom: 3px solid #42b983;
    }
  }
}
</style>
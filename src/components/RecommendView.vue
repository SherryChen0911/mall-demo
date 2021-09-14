<template>
    <div class="mouse-wheel-wrapper" ref="scroll">
      <div class="mouse-wheel-content">
        <div class="mouse-wheel-item" v-for="n in recommends" :key="n.id">
          <div class="recommend-cnt">
            <van-image
              :src="n.cover_url"
              alt=""
              style="width: 80px; height: 80px; margin-bottom: 5px"
            />
            <span>{{ n.title }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import "@/assets/global.scss";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(MouseWheel);

export default {
  name: "RecommendView",
  props: {
    recommends: {
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
    console.log("enter RecommendView mounted");
    this.bs = new BScroll(this.$refs.scroll, {
      scrollX: true,
      scrollY: false,
      mouseWheel: true,
    });
    this.$nextTick(() => {
      this.bs.refresh();
    });

    console.log("recommends", this.recommends);
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.bs = new BScroll(this.$refs.scroll, {
          scrollX: true,
          scrollY: false,
          mouseWheel: true,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mouse-wheel-wrapper {
  width: 100%;
  padding: 20px 0;
  height: 100px;
  overflow: hidden;
  border-bottom: solid 8px #faf6f6;
  // background-color: lightpink;
}
.mouse-wheel-content {
  display: inline-block;
  height: 100px;
  white-space: nowrap;
  // background-color: red;
}
.mouse-wheel-item {
  height: 100px;
  width: 100px;
  // background-color: blue;
  display: inline-block;
}
.recommend-cnt {
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 10px;
}
span {
  width: 100px;
  // display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
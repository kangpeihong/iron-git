<template>
  <div class="headers">
    <div class="close">
      <i class="el-icon-c-scale-to-original" @click="close"></i>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in levelList" :key="item">
        <span class="animate__animated animate__fadeInRight">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "heads",
  data() {
    return {
      msg: "",
      levelList: []
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  mounted() {
    console.log("navUrlList", this.navUrlList);
  },
  computed: {
    ...mapState(["navUrlList", "rightUrl", "isCollapse"])
  },
  filters: {
    // getName(name) {
    //   debugger;
    // }
  },
  methods: {
    close() {
      this.$store.commit("setIsCollapse", this.isCollapse);
    },
    getBreadcrumb() {
      const list = this.$route.matched;

      /* TODO:解决跳转路由报错! */
      // if (list.length > 0) {
      //   if (list[0].name == "home" && list.length > 1) {
      //     list.splice(0, 1);
      //   }
      // }
      const newList = [];

      const indexList = list[0];
      if (indexList.name == "home" && list.length == 1) {
        this.levelList = list;
      } else {
        list.forEach((item, index) => {
          if (index > 0) {
            newList.push(item);
          }
        });
        this.levelList = newList;
        console.log("lll", this.levelList);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.headers{
  display: flex;
  height 60px;
  line-height 60px;
  font-size 26px;
  >>>.el-breadcrumb{
    margin-left 20px
    line-height 60px;
    font-size 16px;
  }
  .opop{
    display inline-block
    width 70px
  }

  .headList-enter-active,.headList-leave-active{
    transition : all 1s;
  }
  .headList-leave-to{
    opacity 0
    transform translateX(30px)
  }
  .headList-enter-to{
    transform translateX(-30px)
  }



}

// .breadcrumb-enter-active,
// .breadcrumb-leave-active {
//   transition: all .3s;
// }
.breadcrumb-enter{
  opacity: 0;
 transform: translateX(30px)
}
.breadcrumb-enter-active {
 transition: all 1s;
}
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}


// .breadcrumb-move {
//   transition: all .3s;
// }

// .breadcrumb-leave-active {
//   position: absolute;
// }
</style>

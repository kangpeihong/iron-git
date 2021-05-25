<template>
  <div class="side_list">
    <el-menu
      :uniqueOpened="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(48, 65, 86)"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      router
      @select="selects"
      :collapse="isCollapse"
    >
      <nav class="nav_title" v-if="!isCollapse">
        <svg-icon icon-class="LOGO" className="icon"></svg-icon>
        个 人 管 理
      </nav>
      <el-menu-item
        v-for="(item, index) in commonPage"
        :key="index"
        :index="item.path"
        >{{ item.pageName }}</el-menu-item
      >
      <!-- <el-menu-item index="/notice">通知</el-menu-item> -->

      <el-submenu
        v-for="items in rightUrl"
        :key="items.index"
        :index="items.id + ''"
        :unique-opened="false"
      >
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ items.authName }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="child in items.children"
            :key="child.index"
            :index="'/' + child.path"
            >{{ child.authName }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { mapState } from "vuex";
export default {
  name: "side",
  components: {
    SvgIcon
  },
  data() {
    return {
      msg: "",
      index: ""
    };
  },
  created() {
    console.log("state", this.$store.state);
  },
  computed: {
    ...mapState(["commonPage", "rightUrl", "isCollapse"])
  },

  methods: {
    selects(url, arr) {
      const obj = {
        index: arr[0],
        path: url
      };
      this.$store.state.navUrlList = obj;
    },
    handleOpen(index, path) {},
    handleClose() {}
  }
};
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
>>>.el-menu{
  border none
}
.side_list {
  // width: 200px;
  height: 100vh;
  background-color: rgb(48, 65, 86);
  .el-menu{
    border none
  }
  .nav_title {
    padding-left: 20px;
    color: #fff;
    line-height: 60px;
    display flex
    align-items center
    font-size 18px
    font-weight 900
    .icon {
      width: 60px !important;
      height: 60px !important;
      margin-right 12px
      color #fff !important

    }
  }
}
</style>

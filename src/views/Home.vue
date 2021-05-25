<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-container>
      <side></side>
      <el-container>
        <el-header>
          <!-- <heads></heads> -->
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import side from "@/components/side";
// import heads from "@/components/head";

export default {
  name: "Home",
  components: {
    side
    // heads
  },
  created() {
    console.log("log", this.$router.options.routes);
  }
};
</script>

<style lang="stylus" scope>

.home{
  display flex

}
</style>

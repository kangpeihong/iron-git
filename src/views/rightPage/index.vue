<template>
  <div>
    123
    <!-- <transition class="animated fadeInanimate__animated animate__fadeIn">
      <span>rightPage222</span>
    </transition>
    <div class="animate__animated animate__fadeInRight opop">rightPage222</div>

    <transition tag="span"
      >

      <span class="animated">坏蛋，坏蛋，大坏蛋~~~</span>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: ""
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-enter-active,
    .v-leave-active {
      transition: opacity 1s
    }
    .opop{
      min-width 30px;
    }
</style>

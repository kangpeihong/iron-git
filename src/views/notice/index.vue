<template>
  <div>
    notices
    <el-button
      type="primary"
      v-permission="{ action: 'add', effect: 'disabled' }"
      >add</el-button
    >
    <el-button
      type="primary"
      v-permission="{ action: 'delet', effect: 'disabled' }"
      >delet</el-button
    >

    <el-button type="primary">exit</el-button>

    <el-button type="primary">view</el-button>
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
  setup() {},
  created() {},
  computed: {},
  methods: {}
};
</script>

<style lang="" scoped></style>

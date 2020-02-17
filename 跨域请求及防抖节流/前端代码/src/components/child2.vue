<template>
  <div>
    这个就是child2组件
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // 这个表示监听的模式，
    this.$bus.$on("MSGEVENT", e => {
      console.log("这个是child2 组件里面的 监听值得地方： ", e);
    });
  },
  methods: {
    name() {}
  }
};
</script>

<style scoped></style>

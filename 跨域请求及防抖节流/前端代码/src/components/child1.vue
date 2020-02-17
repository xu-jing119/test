<template>
  <div>这个是child1组件--{{ child }}</div>
</template>

<script>
export default {
  data() {
    return {
      child: "1"
    };
  },
  created() {
    let that = this;
    this.$bus.$on("MSGEVENT", param => {
      this.child = param;
      console.log(this.child);
    });
  }
};
</script>

<style></style>

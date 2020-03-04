export default {
  methods: {
    gotoUrl: () => {
      // 写跳转的代码
      location.href = "https:/www.baidu.com";
    },
    // 当你在mixin 的方法中使用 this, 不可以使用箭头函数
    goBack() {
      this.$router.go(-1);
    }
  }
};

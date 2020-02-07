import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// 创建一个vue的实例对象
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

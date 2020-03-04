import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import store from "./store";

Vue.config.productionTip = false;

// 全局的mixin
Vue.mixin({
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
});

new Vue({
  router,
  store, // 这里就是 this.$store 的来源
  render: h => h(App)
}).$mount("#app");

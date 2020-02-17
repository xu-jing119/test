import Vue from "vue";
import VueBus from "vue-bus";
import axios from "axios";

// vue-bus  事件总线
// 自己写express服务器， 模拟跨域请求的 三种工作里面的方式
// 等下解释懒加载
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueBus);

axios.defaults.baseURL = "/api";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 有些请求，比如登录，注册，首页 是不需要权限的，也就是不需要token值
// 下面这个是我们的请求拦截器，一般在这里面给所有的需要权限的请求，添加上token值
axios.interceptors.request.use(
  function(config) {
    console.log(config);
    if (config.url != "/login" || config.url != "/registry") {
      config.headers.Authorization = localStorage.getItem("my-token")
        ? localStorage.setItem("my-token", res.token)
        : "";
    }

    console.log("这个是每个请求发出去之前，都会只执行的函数，因为他会拦截请求");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 下面这个是响应拦截器， 一般对返回的数据进行格式化的操作，还有对nprogress 进行统一关闭进度条
axios.interceptors.response.use(
  function(response) {
    console.log("这个是每次请求成功之后返回到我们具体的页面之前要执行的函数");
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

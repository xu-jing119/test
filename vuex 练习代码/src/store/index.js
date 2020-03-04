import Vuex from "vuex";
import Vue from "vue";
import { API } from "../api";
import createVuexAlong from "vuex-along";

// 使用vuex 之前要先调用
Vue.use(Vuex);

// 新建一个store
// 最终目的是要实现兄弟组件 ，或非兄弟组件的数据 共享
export default new Vuex.Store({
  // plugins: [createVuexAlong()],
  state: {
    number: 105,
    productList: [],
    carList: [
      { title: "茄子", num: 2, price: 400, selected: true },
      { title: "黄瓜", num: 5, price: 300, selected: true },
      { title: "番茄", num: 3, price: 500, selected: true }
    ]
  },
  // 用于从一些状态，生成新的状态
  getters: {
    doubleN: state => {
      return state.number * 2;
    },

    // 计算选中商品数量
    selectCount: state => {
      // 对数组过滤的方法
      // 1. 过滤 filter  2. 提取数量 map  3. 求和 reduce
      return state.carList
        .filter(x => x.selected)
        .map(x => x.num)
        .reduce((a, b) => a + b);
    },
    // 计算总价的逻辑
    totolmoney: state => {}
  },

  // 专门修改 state 中的数据 的方法
  mutations: {
    modify(state, payload) {
      state.number += payload;
    },
    setProducts(state, payload) {
      console.log("Payload", payload);
      state.productList = payload;
    }
  },

  // 新建一组 Actions , 可以用来向服务器请求数据
  actions: {
    getProduct(context, payload) {
      // 需要使用axios
      API.get("/whmini/products", {
        params: payload
      }).then(({ status, data }) => {
        // 需要通过  commit 实现修改数据
        if (status === 200) {
          context.commit("setProducts", data.data.data);
        } else {
          // 失败处理
        }
      });
    }
  }
});

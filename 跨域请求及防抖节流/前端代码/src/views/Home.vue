<template>
  <div class="home">
    <p>测试一下事件总线</p>
    <button @click="sendMsg">点击这个按钮，将父组件的数据传递出去</button>
    <hr />
    <button @click="getAjax">发起get请求</button>
    <Child1 />
    <Child2 />
  </div>
</template>

<script>
// 先导入--后注册--再使用
import Child1 from "@/components/child1.vue";
import Child2 from "@/components/child2.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "我是父组件home"
    };
  },
  methods: {
    sendMsg() {
      // 这里使用 事件总线， 发送数据， 在任何需要这个数据的地方  接收就可以了
      // 我们这里只管发送， 也叫发布监听模式
      this.$bus.$emit("MSGEVENT", this.msg);
    },
    getAjax() {
      this.$http.get("/login").then(
        function(res) {
          console.log("请求成功： ", res);
          localStorage.setItem("my-token", res.token);
        },
        function() {
          console.log("请求失败了");
        }
      );
    }
  },
  components: {
    Child1,
    Child2
  }
};
</script>

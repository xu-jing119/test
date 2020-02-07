<template>
  <div class="home">
    <h2>数据驱动视图</h2>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <table cellspacing="0">
      <thead>
        <tr>
          <th>姓名</th>
          <th>科目</th>
          <th>成绩</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.subject }}</td>
          <td>{{ item.score }}</td>
          <td>
            <a @click="deleteItem(index)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 关于双重 v-for循环的使用条件， 父项的子项必须也是数组，才能使用双重
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  // 在vue里面data 上面的数 必须是一个函数返回一个对象的形式
  data() {
    return {
      list: [
        {
          name: "宋江",
          subject: "演讲",
          score: 100
        },
        {
          name: "林冲",
          subject: "武术",
          score: 98
        },
        {
          name: "阮小二",
          subject: "游泳",
          score: 99
        },
        {
          name: "西门庆",
          subject: "有钱",
          score: 99
        },
        {
          name: "潘金莲",
          subject: "漂亮",
          score: 100
        },
        {
          name: "武松",
          subject: "功夫",
          score: 100
        }
      ]
    };
  },
  methods: {
    deleteItem(index) {
      // 这个的解释就是，只要数据一发生改变，有vue给我们以最小的代价，最高的效率，去重绘整个页面，
      console.log(index);
      this.list.splice(index, 1);
    }
  },
  created() {
    console.log(
      "一般是在这个钩子函数里面， 发起请求，获取服务器的数据; created mounted"
    );
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
table {
  width: 500px;
  margin: 100px auto;
  border-collapse: collapse;
  text-align: center;
}

td,
th {
  border: 1px solid #333;
}

thead tr {
  height: 40px;
  background-color: #ccc;
}

a {
  text-decoration: underline;
  color: brown;
}
a:hover {
  cursor: pointer;
}
</style>

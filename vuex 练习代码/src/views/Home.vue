<template>
  <div class="home">
    <h1>我来测试父子组件的通信 </h1>
    <p>你点了 {{count}} 次</p>
    <button @click="add"> 加1 </button>
    <HelloWorld :number.sync="number"  :count.sync="count" :msg="msg" />
    <ChildA :number.sync="number"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ChildA from '@/components/ChildA.vue';

export default {
  name: 'Home',
  data: () => ({
    count: 10,
    number: 100,
    msg:'Hello 2020',
  }),
  methods: {
    add() {
      this.count++;
    }
  },
  components: {
    HelloWorld,
    ChildA
  }
}
</script>

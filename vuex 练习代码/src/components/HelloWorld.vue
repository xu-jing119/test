<template>
  <div class="hello">
    <h1>父组件 中的 msg {{ msg }}</h1>
    <p>购物车中商品的数量 {{total}}</p>
    <p>这是父组件中的 count {{count}}, Number:{{number}} x2 {{dnum}}</p>
    <ul>
      <li v-for="item in products" :key="item.id">{{item.title}}</li>
    </ul>
    <button @click="doMinus">减1</button>
    <button @click="modify(-10)">减10</button>
  </div>
</template>
<script>
// 把store 中的 number 放到组件中的 data
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'HelloWorld',

  // 计算属性
  computed:  {
     ...mapState({
        number: 'number',
        products: 'productList',
     }),
     ...mapGetters({
        dnum: 'doubleN',
        total : 'selectCount'
     })
  },

  created() {
    console.log('Number-->', this.number);
  },

  props: {
    msg: String,
    count: Number
  },
  methods : {
    doMinus() {
      // 在子组件中触发一个事件
      this.$emit('update:count', this.count-1)

    },
    ...mapMutations([
      'modify'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  background: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

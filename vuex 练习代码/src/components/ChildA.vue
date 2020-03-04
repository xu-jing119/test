<template>
    <div class="hello">
        <h2>这是是组件A</h2>
        <p>Number: {{number}} x 2 {{dnum}}</p>
        <button @click="modify(10)">加10</button>
        <button @click="getProduct({page:1})">取数据 </button>
    </div>
</template>
<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name:'ChildA',
    computed: {
        ...mapState({
            number: 'number'
        }),
        ...mapGetters({
            dnum: 'doubleN'
        })
    },

    created() {
        console.log('ChindA Number-->', this.number);
    },

    methods: {
        ...mapMutations([
            'modify'
        ]),
        ...mapActions([
            'getProduct'
        ])
    }


}
</script>


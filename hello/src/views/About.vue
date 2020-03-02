<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click='goBack'>返回</button>
  </div>
</template>

<script>
import goBacks from '@/mixins/goBacks.js'
export default {
  mixins:[goBacks]
}
</script>

<template>
  <button @click="handle('pie')">点击切换pie</button>
  <button @click="handle('all')">点击切换all</button>
  <div>
    <show-charts :condition="condition"></show-charts>
  </div>
  <!-- <show-charts condition="all"></show-charts> -->
</template>

<script setup>
  import showCharts from '@/components/showCharts.vue'
  import { ref } from 'vue'
  let condition = ref('all')
  const handle = (type) => {
    condition.value = type
    console.log('type: ',condition.value)
  }
</script>

<style lang="less" scoped>

</style>
<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()

</script>


<style lang="less">
#app {
  height: 100%;
}
</style>

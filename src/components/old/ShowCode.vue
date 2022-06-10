<template>
  <div class="code">
    <pre><code v-html="data"></code></pre>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { pageId } = defineProps({
  pageId: {
    type: String,
    required: true
  }
})
let data = ref(route.query.data)
const dealData = (data) => {
  const regexp = /: {/g
  // let matches = data.matchAll(regexp)
  data2 = data.replaceAll(': {', "<span style='background-color: red;'>: {</span>")
  console.log(data2.value)

  // for (let match of matches) {
  //   console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);

  // }
}

onMounted(() => {
  // console.log(typeof data.value)
  data.value = data.value.replaceAll('option',"<span style='background-color: #0367dd;color: #fff'>option</span>")
  data.value = data.value.replaceAll('grid', "<span style='background-color: #D94E94;color: #fff'>grid</span>")
  data.value = data.value.replaceAll('label', "<span style='background-color: #D94E94;color: #fff'>label</span>")
  data.value = data.value.replaceAll('xAxis', "<span style='background-color: #D94E94;color: #fff'>xAxis</span>")
  data.value = data.value.replaceAll('yAxis', "<span style='background-color: #D94E94;color: #fff'>yAxis</span>")
  data.value = data.value.replaceAll('series: ', "<span style='background-color: #D94E94;color: #fff'>series</span>")
})

</script>
<style lang="less" scoped>
.code {
  height: 100%;
  width: 100%;
  background-color:#161724;
  position: relative;
}
code {
  background-color:#161724;
  // height: 100%;
  width: 100%;
  color: #C7D4FF;
  position: absolute;
  left: 0px;
  top: 0;
  font-size: 16px;
  padding-left: -40px;
  font-family: 'Consolas';
  tab-size:2;
}
</style>

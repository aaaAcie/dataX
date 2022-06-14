<template>
  <el-input
    v-model="data"
    placeholder="aaa"
    :autosize="{ minRows: 1, maxRows: 8 }"
    :type="type"
    class="visual_input"
  />
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  const { data } = defineProps({
    data: {
      type: [String, Object],
      required: true
    }
  })
  let type = ref('')
  onMounted(()=> {
    // type = computed(() => { isNumber(data) ? 'number' : 'textarea' })
    let data2 = data.toString()
    // console.log(data2)
      if(data2.startsWith('#')){
        type.value = 'color'
      }else {
        type.value = isNumber(data) ? 'number' : 'textarea'
      }
  
      if(isNumber(data)){
        console.log('type' ,isNumber(data), data)
      }
    // console.log(data)
    // type.value = isNumber(data) ? 'number' : 'textarea'
  })
  function isNumber(val){
    var regPos =  /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/ //判断是否是数字。
  
    if (regPos.test(val) ) {
      return true
    } else {
      return false
    }
  }
</script>

<style lang="less" scoped>
.visual_input {
  :deep(.el-input__inner) {
    min-width: 40px;
  }
}

</style>

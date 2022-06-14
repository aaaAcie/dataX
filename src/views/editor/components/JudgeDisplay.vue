<template>
  <span class="visual_label">{{crt_key}}:</span>
  <div class="visual_right">
    <!-- 数组 -->
    <div v-if="Array.isArray(crt_option)">
      <is-array :data="crt_option" :crt_key="crt_key"></is-array>
    </div>
    <!-- 对象 -->
    <div v-else-if="typeof crt_option === 'object'">
      <is-object :data="crt_option"></is-object>
    </div>
    <deal-input v-else :data="crt_option"></deal-input>
  </div>
  
</template>

<script setup>
  import IsObject from './IsObject.vue'
  import IsArray from './IsArray.vue'
  import DealInput from './DealInput.vue'

  const {crt_key, crt_option}= defineProps({
    crt_option: {
      type: String,
      required: true
    },
    crt_key: {
      type: [String, Number],
      required: true
    }
  })
</script>

<style lang="less" scoped>

  .visual_label {
    color: #409eff;
    display: inline-block;
    // padding-right:20px;
    // width: 150px;
    font-size: 18px;
  }
  .visual_right {
    flex: 1;
  }
</style>

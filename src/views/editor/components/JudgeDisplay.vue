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
    <!-- string color-->
    <el-input
      v-else-if="crt_key=='color'"
      v-model="crt_option"
      placeholder="Please input"
      class="visual_input"
      type="color"
    />
    <!-- string -->
    <el-input
      v-else
      v-model="crt_option"
      placeholder="Please input"
      class="visual_input"
    />
  </div>
  
</template>

<script setup>
  import {  } from 'vue'
  import IsObject from './IsObject.vue'
  import IsArray from './IsArray.vue'

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

<template>
<div class="array_area">
  <div v-for="(item,index) in data" class="array">
    <div v-if="typeof data[index] === 'object'" class="small_object">
      <is-object :data="data[index]"></is-object>
    </div>
    <div v-else>
      <el-input
        v-if="crt_key=='color'"
        type="color"
        v-model="data[index]"
        class="visual_input"
        style="width: 60px; margin: 3px;"
      />
      <el-input
        v-else
        v-model="data[index]"
        class="visual_input"
      />
    </div>
  </div>
</div>
</template>

<script setup>
  import {  } from 'vue'
  import IsObject from './IsObject.vue'
  const { data,crt_key }= defineProps({
    data: {
      type: [String, Object],
      required: true
    },
    crt_key: {
      type: [String, Number],
      required: true
    }
  })
  
</script>

<style lang="less" scoped>
  .array_area {
    display: flex;
    // width: 600px;
    // width: 100%;
    flex-wrap: wrap;
    flex: 1;
  }
  .array {
    // width: 150px;
    // margin: 3px;
    margin-right: 20px;
    :deep(.el-input__wrapper) {
      padding: 0;
    }
    // .visual_input {
      
    // }
  }
  .visual_label {
    color: #c9d4d4;
    display: inline-block;
    // padding-right:20px;
    width: 150px;
    font-size: 18px;
  }
  .small_object {
    background-color: burlywood !important;
    // width: 100px;
    margin-bottom: 5px;

  }
</style>

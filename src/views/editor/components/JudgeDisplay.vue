<template>
  <span class="visual_label">{{crt_key}}:</span>
  <!-- 遍历 -->
  <div v-if="Array.isArray(crt_option)">
    <div v-for="(item,index) in crt_option">
      <el-input
        v-if="crt_key=='color'"
        type="color"
        v-model="crt_option[index]"
        class="visual_input"
        size="20"
      />
      <el-input
        v-else
        v-model="crt_option[index]"
        class="visual_input"
      />
    </div>
  </div>
  <div v-else-if="typeof crt_option === 'object'">
    <div v-for="i in Object.keys(crt_option)" v-show="crt_option[i]!=null">
      <span class="visual_label">{{i}}:</span>
      <el-input
        v-model="crt_option[i]"
        placeholder="Please input"
        :autosize="{ minRows: 1, maxRows: 8 }"
        type="textarea"
        class="visual_input"
      />
    </div>
  </div>
  <el-input
    v-else-if="crt_key=='color'"
    v-model="crt_option"
    placeholder="Please input"
    class="visual_input"
    type="color"
  />
  <el-input
    v-else
    v-model="crt_option"
    placeholder="Please input"
    class="visual_input"
  />
</template>

<script setup>
  import {  } from 'vue'
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
    color: #c9d4d4;
    display: inline-block;
    // padding-right:20px;
    width: 200px;
    font-size: 18px;
  }
  .visual_input {
    // width: 74%;
  }
</style>

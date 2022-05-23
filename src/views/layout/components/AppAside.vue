<template>
  <div class="app-aside">
      <el-menu
        default-active="all"
        class="el-menu-vertical-demo"
        background-color="#1E1D2A"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        @select="handleSelect"
      >
        <el-menu-item index="all">
          <el-icon><location /></el-icon>
          <span>全部</span>
        </el-menu-item>
        <el-menu-item index="bar">
          <el-icon><icon-menu /></el-icon>
          <span>柱状图</span>
        </el-menu-item>
        <el-menu-item index="pie">
          <el-icon><icon-menu /></el-icon>
          <span>饼图</span>
        </el-menu-item>
        <el-menu-item index="line">
          <el-icon><icon-menu /></el-icon>
          <span>折线图</span>
        </el-menu-item>
        <el-menu-item index="funnel">
          <el-icon><icon-menu /></el-icon>
          <span>漏斗图</span>
        </el-menu-item>
        <el-menu-item index="radar">
          <el-icon><icon-menu /></el-icon>
          <span>雷达图</span>
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
  import {  } from 'vue'
  const emit = defineEmits(['getMyType'])
  // 传给父组件
  const handleSelect = (type,indexPath,item) => {
    // console.log(type,indexPath,item);
    emit('getMyType', type)
  }
</script>

<style lang="less" scoped>
.app-aside {
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: 0 none;
  }
}
</style>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <app-aside @getMyType="getMyType"></app-aside>
        </el-aside>
        <el-main>
            <div>
              <show-charts :condition="condition" ></show-charts>
            </div>
            <!-- <router-view/> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  import AppHeader from './components/AppHeader.vue'
  import AppAside from './components/AppAside.vue'

  import showCharts from '@/components/showCharts.vue'
  import { ref,onActivated } from 'vue'
  let condition = ref('all')

  const getMyType = (type) => {
    condition.value = type
    console.log('type => ',condition.value)
  }
onActivated(() => {
   console.log('显示')
})

</script>


<style lang="less">
.common-layout {
  height: 100%;
  ::-webkit-scrollbar{
    width: 4px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb
  {
    background-color: rgba(46, 151, 255, 1);
    height: 4px;
  }
  
}
.el-header {
  background-color: #282737;
}
.el-container {
  height: 100%;

  .el-aside {
    background-color: #1E1D2A;
  }
  .el-main {
    background-color: #161724;
    padding-left: 40px;
  }
}
::-webkit-scrollbar{
  display: none;
}

</style>

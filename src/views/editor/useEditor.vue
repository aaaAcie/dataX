<template>
<div class="box-biggest">
  <el-button class="back" @click="goBack">返回主页</el-button>
  <iframe
    ref="iframe"
    :src="pathname"
    sandbox="allow-same-origin allow-scripts">
  </iframe>
  <div class="big-container">
    <div class="buttons">
      <button @click="runCode2">RUN2</button>
      <button @click="runCode">RUN</button>
      <button @click="saveAs">导出</button>
      <!-- <button class="clear" @click="clearConsole">Clear</button> -->
    </div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleChoose">
      <el-tab-pane label="可视化编辑" name="visual_code">
        <div class="visual" >
          <div class="visual_item" v-for="key in Object.keys(option)" v-show="show_option.includes(key) ">
            <JudgeDisplay :crt_key="key" :crt_option="option[key]"> </JudgeDisplay>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="代码编辑" name="code">
        <my-editor ref="editor" :content="code" class="editor"></my-editor>
      </el-tab-pane>
    </el-tabs>
    <!-- <div class="myconsole">
      <my-console ref="myconsole" />
    </div> -->
  </div>
</div>
</template>

<script setup>
import { ref,computed, onMounted } from 'vue';
// import edit from './edit.vue'
import MyEditor from './components/MyEditor.vue'
import JudgeDisplay from './components/JudgeDisplay.vue'
import {codeTpl0, codeTpl} from '@/utils/codeTemplate'
import { useRoute,useRouter } from 'vue-router'
import { useStore } from 'vuex'
// const route = useRoute()
const router = useRouter()
const store = useStore()

let iframe = ref('')
let editor = ref('')
let option = ref({})
const show_option = ['backgroundColor','grid', 'label','xAxis', 'yAxis', 'series','tooltip','title','legend','color']
let pathname = computed(() => store.state.pathname)
let code = computed(() => store.state.content)
let my_html_0 = computed(() => codeTpl0(store.state.content)) // 导出用的模板

let activeName = ref('visual_code')
const handleChoose = (tab, event) => {
  console.log(tab, event)
}
onMounted(() => {
  window.addEventListener('message', function(e){
    if(e.data.option){
      store.commit('setOption', e.data.option)
      console.log('收到子消息为： ', e.data.option)
      // option.value = e.data.option
      let all = e.data.option
      // console.log(all)
      Object.keys(all).forEach((key) => {
        console.log(key,all[key]);
        if(all[key] && all[key].length != 0){
          if(Array.isArray(all[key]) && all[key].length==1){
            all[key] = all[key][0]
            console.log('----- ',key,all[key])
          }
          // option.value[key] = JSON.stringify(all[key])
          option.value[key] = all[key]

          console.log('key: ',key,typeof all[key],all[key])
        }
      })
      console.log(option.value == e.data.option)

    }
  })
})

console.log(pathname.value)
const runCode2 = () => {
  // 把option传给iframe
  iframe.value.contentWindow.postMessage({
    newOption: JSON.parse(JSON.stringify(option.value)),
    status: '200'
  },'*');

}
const runCode = () => {
  let codes = editor.value.submitCode()
  const iframeDoc = iframe.value.contentDocument
  iframeDoc.open()

  let my_html = codeTpl(codes) // run用的模板

  my_html_0.value = codeTpl0(codes) // 导出用的模板
  iframeDoc.write(my_html)
  // console.log(my_html)
  iframeDoc.close();
}
const saveAs = () => {
  let downloadUrl = window.URL.createObjectURL(new Blob([my_html_0.value], {type: "application/html"}))
  let anchor = document.createElement("a")
  anchor.href = downloadUrl
  anchor.download =  pathname.value.split('/')[1]
  console.log(pathname.value.split('/')[1])
  anchor.click()
  window.URL.revokeObjectURL(anchor.href)
}
// const clearConsole = () => {
//   myconsole.value.clear()
// }
const goBack = () => {
  // router.go(-1)
  router.push({
    name: 'charts'
  })
}
</script>

<style lang="less" scoped>
.box-biggest {
  position: relative;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #252739;
}
.back {
  position: absolute;
  top: 10px;
  left: 10px;
  box-sizing: border-box;
  background-color: #031026;
  color: #99c8ff;
  border: 1px solid #3a9bcb;
}
.big-container {
  box-sizing: border-box;
  // margin-top: 10px;
  padding: 10px 0px 10px 0;
  // position: fixed;
  height: 100%;
  width: 65%;
  min-width: 850px;
  position: absolute;
  right: 10px;
  ::-webkit-scrollbar{
    width: 14px;
    // height: 10px;
  }
  ::-webkit-scrollbar-thumb
  {
    background-color: #424242;
    height: 4px;
  }
  .editor,
  .myconsole {
    // padding: 10px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    overflow: hidden;
  }
  .buttons {
    position: absolute;
    z-index: 9999999;
    top: 10px;
    right: 0;
    box-sizing: border-box;
    // padding: 0 10px;
    width: 20%;
    display: flex;
    button {
      cursor: pointer;
      margin-left: 10px;
      border: none;
      height: 32px;
      width: 100%;
      // border: 2px solid rgb(248, 135, 154);
      background: #3a9bcb;
      color: #cbe2ea;
      border-radius: 4px;
      &.clear {
        width: 30%;
        border: 2px solid rgb(172, 171, 171);
        background: rgb(190, 189, 189);
        margin-left: 5px;
      }
    }
  }
}
iframe {
  // position: float;
  // margin: 0 auto;
  position: absolute;
  top: 50px;
  width: 400px;
  flex: 1;
  border: 0;
  // float: right;
  // border: 1px solid #99c8ff;
  width: 40vh;
  min-width: 450px;

  // width: 450px;
  height: 300px;
}

:deep(.demo-tabs){
  .is-top {

    color: #c2e2e8;
  }
  .el-tab-pane {
    // height: 1000px;
    height: 90vh;

  }
  .visual {
  // position: absolute;
  top: 280px;
  height: 100%;
  background-color: #1e1e1e;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99999999;
  overflow-y: auto;
  padding-left: 30px;
  ::-webkit-scrollbar{
    width: 14px;
    // height: 10px;
  }
  ::-webkit-scrollbar-thumb
  {
    background-color: #686868;
    height: 4px;
  }
  .visual_item {
    color: #c9d4d4;
    line-height: 30px;
    margin: 10px 0px;
    display: flex;
    align-items: center;
    width: 88%;
  }
  
  .visual_label {
    color: #c9d4d4;
    display: inline-block;
    // padding-right:20px;
    width: 200px;
    font-size: 18px;
  }
}
} 

</style>

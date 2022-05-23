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
      <button @click="runCode">RUN</button>
      <button @click="saveAs">导出</button>
      <!-- <button class="clear" @click="clearConsole">Clear</button> -->
    </div>
    <my-editor ref="editor" :content="code" class="editor"></my-editor>
    <!-- <div class="myconsole">
      <my-console ref="myconsole" />
    </div> -->
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
// import edit from './edit.vue'
import MyEditor from './MyEditor.vue'
import MyConsole from './MyConsole.vue'
import {codeTpl0, codeTpl} from '@/utils/codeTemplate'
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

let iframe = ref('')
let editor = ref('')
let myconsole = ref('')
let pathname = ref(route.query.pathname)
let code = ref(route.query.content)
let my_html_0 = ref(codeTpl0(route.query.content)) // 导出用的模板

console.log(pathname.value)
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
}
.big-container {
  box-sizing: border-box;
  // margin-top: 10px;
  padding: 10px 0px 10px 0;
  // position: fixed;
  height: 100%;
  width: 75%;
  min-width: 850px;
  position: relative;
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
    top: 10px;
    right: 0;
    box-sizing: border-box;
    // padding: 0 10px;
    width: 20%;
    display: flex;
    button {
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
  flex: 1;
  border: 0;
  // float: right;
  // border: 1px solid #99c8ff;
  width: 40vh;
  min-width: 450px;

  // width: 450px;
  height: 80vh;
}
</style>

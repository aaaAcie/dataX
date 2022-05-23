<template>
  <div class="console">
    <div class="container" ref="container"></div>
  </div>
</template>

<script setup>
  import {  onMounted,reactive,ref } from 'vue'
  import * as monaco from 'monaco-editor'
  const defaultOptions = {
    theme: 'github',
    tabSize: 0,
    automaticLayout: true,
    wordWrap: 'wordWrapColumn',
    wordWrapColumn: 120,
    minimap: {
      enabled: false,
    },
    readOnly: true,
    lineHeight: 30,
  }
  let editData = reactive({
    infos: '',
    linesCount:  0,
    deltaDecorations: []
  })
  let container = ref()
  let editor
  const initConsole = () => {
    editor = monaco.editor.create(container.value, {
      ...defaultOptions,
    })
  }
  const bindEvents = () => {
    window.addEventListener('message', (e) => {
      if (e.data.from === 'codeRunner') {
        const { data, type } = e.data;
        data.forEach((d) => {
          const info = { type };
          if (Array.isArray(d)) {
            info.data = JSON.stringify(d);
          } else if (d.constructor === Object) {
            info.data = JSON.stringify(d, null, 2);
          } else {
            info.data = String(d);
          }
          info.lines = typeof info.data === 'string' ? info.data.split(/\r\n|\r|\n/).length : 1;
          console.log('this is info', info)
          setValue(info)
        })
      }
    })
  }
  const setValue = (info) => {
    editData.infos += `${info.data}\n`;
    const startLine = editData.linesCount + 1;
    const endLine = editData.linesCount + info.lines;
    editData.linesCount = endLine;
    editor.setValue(editData.infos.replace(/\n$/, ''));
    editData.deltaDecorations.push({
      range: new monaco.Range(startLine, 1, endLine, 1),
      options: { isWholeLine: true, className: `${info.type}Decoration` },
    });
    editor.deltaDecorations([], editData.deltaDecorations);
    editor.revealLineInCenter(endLine);
  }
  const clear = () => {
    console.log('clear')
    console.clear();
    editData.infos = '';
    editData.linesCount = 0;
    editData.deltaDecorations = []
    editor.setValue(editData.infos);
    editor.deltaDecorations([], editData.deltaDecorations);
    editor.revealLineInCenter(1);
  }
  onMounted(() => {
    initConsole()
    bindEvents()
  })
  defineExpose({ clear })
</script>

<style lang="less" scoped>
.console {
  width: 100%;
  .container {
    height: 30vh;
  }
}
</style>
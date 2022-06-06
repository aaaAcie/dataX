<template>
<keep-alive>
  <div class="single">
    <iframe :src=src style="width: 100%; height: 80%;" ref="iframe" high ></iframe>
    <!-- <div class="info" @click="getCode">{{s}}</div> -->
    <div class="info" @click="goEdit">{{s}}</div>
  </div>
</keep-alive>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  const router = useRouter()
  const store = useStore()
  const { src,index } = defineProps({
    src: {
      type: String,
      required: true
    },
    index: {
      type: [String, Number],
      required: true
    }
  })
  const emit = defineEmits(['getTypes'])
  let iframe = ref(null)
  let content = ref('')
  let page = src.split('.')[0].split('/')[1]
  let s = ref('')
  onMounted(() => {
    // console.log('====   ',condition)
    const ifrW = iframe.value.contentWindow
    ifrW.onload = function(){
      let types = ifrW.change(370, 193)
      emit('getTypes', [index,types])
      // console.log(page, types,typeof types)
      if(typeof types == 'object'){
        types.forEach(item => {
          s.value += item + ' / '
        })
      } else {
        s.value = types + ' / '
      }

      // ifrW.document.getElementById('main').style.zoom = '95%'
      let scripts = ifrW.document.getElementsByTagName('script')
      content = scripts[scripts.length-1]
    }
  })

  const getCode = () => {
    router.push({
      name: 'code',
      params: {
        pageId: page
      },
      // 给子路由查询
      query: {
        data: content.text
      }
    })
  }
  const goEdit = () => {
    console.log('--------')
    store.commit('setPathname', src)
    store.commit('setContent', content.text)
    router.push({
      name: 'edit',
      params: {
        pageId: page
      },
      // 给子路由查询
      // query: {
      //   pathname: src,
      //   content: content.text
      // }
    })


  }
</script>

<style lang="less" scoped>
.single {
  width: 370px;
  height: 234px;
  // background: url('@/assets/bg.png');
  background-color: #252739;
  margin-right: 35px;
  margin-bottom: 22px;
}
iframe {
  border: 0;
  width: 100%;
}
.info {
  background-color: #33364B;
  width: 100%;
  height: 45px;
  color: #C7D4FF;
  text-align: right;
  line-height: 45px;
  padding-right: 19px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
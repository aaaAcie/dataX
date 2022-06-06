import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state: {
    pathname: '',
    content: ''

  },
  mutations: {
    setPathname (state, payload) {
      // console.log(payload,'=============')
      state.pathname = payload
    },
    setContent (state, payload) {
      // console.log(payload,' content ')
      state.content = payload
    }
  }

})
export default store
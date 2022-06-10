import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state: {
    pathname: window.localStorage.getItem("pathname") || null,
    content: window.localStorage.getItem("content") || '',
    option: window.localStorage.getItem("option") || ''
  },
  mutations: {
    setPathname (state, payload) {
      // console.log(payload,'=============')
      state.pathname = payload
      window.localStorage.setItem("pathname", payload)
    },
    setContent (state, payload) {
      state.content = payload
      window.localStorage.setItem("content", payload)
    },
    setOption (state, payload) {
      state.option = payload
      window.localStorage.setItem("option", payload)
    }
  }

})
export default store
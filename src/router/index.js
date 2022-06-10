import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'charts',
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index.vue'),
    meta: {
      keepAlive: true, // 是否缓存   
    }
  },
  {
    path: '/code/:pageId',
    name: 'code',
    component: () => import(/* webpackChunkName: 'code' */'@/components/ShowCode.vue'),
    props: true
  },
  {
    path: '/edit/:pageId',
    name: 'edit',
    component: () => import(/* webpackChunkName: 'edit' */'@/views/editor/useEditor.vue'),
    props: true
  },
  // {
  //   path: '*',
  //   name: 'error-page',
  //   component: () => import(/* webpackChunkName: 'error-page' */'@/views/error-page/index')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
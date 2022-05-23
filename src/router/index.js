import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'charts',
    component: () => import(/* webpackChunkName: 'layout' */'@/views/layout/index.vue'),
    meta: {
      keepAlive: true, // 是否缓存   
    }
    // redirect:'all',
    // children: [
    //   {
    //     path: '/all',
    //     name: 'all',
    //     component: () => import(/* webpackChunkName: 'all' */'@/views/all/index2.vue')
    //   },
    //   {
    //     path: '/bar',
    //     name: 'bar',
    //     component: () => import(/* webpackChunkName: 'role' */'@/views/bar/index.vue')
    //   },
    //   {
    //     path: '/line',
    //     name: 'line',
    //     component: () => import(/* webpackChunkName: 'line' */'@/views/line/index.vue'),
    //   },
    //   {
    //     path: '/pie',
    //     name: 'pie',
    //     component: () => import(/* webpackChunkName: 'pie' */'@/views/pie/index2.vue')
    //   }
    // ]
  },
  {
    path: '/code/:pageId',
    name: 'code',
    component: () => import(/* webpackChunkName: 'layout' */'@/components/ShowCode.vue'),
    props: true
  },
  {
    path: '/edit/:pageId',
    name: 'edit',
    component: () => import(/* webpackChunkName: 'layout' */'@/components/useEditor.vue'),
    props: true
  },
  {
    path: '/edit2',
    name: 'edit2',
    component: () => import(/* webpackChunkName: 'layout' */'@/components/useEditor2.vue'),
    props: true
  }
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
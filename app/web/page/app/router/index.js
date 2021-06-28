import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from 'component/layout/app/layout.vue'

Vue.use(VueRouter)

// 页面框架路由
function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'AppLayout',
        redirect: { name: 'Index' },
        component: AppLayout,
        children: [
          {
            path: 'index',
            name: 'Index',
            component: () => import('page/app/view/index.vue'),
          },
          {
            path: '401',
            name: 'Error401',
            component: () => import('page/app/view/Error/Error401'),
          },
          {
            path: '5xx',
            name: 'Error5xx',
            component: () => import('page/app/view/Error/Error5xx'),
          },
        ]
      },
    ]
  })
}

const router = createRouter()

export default router
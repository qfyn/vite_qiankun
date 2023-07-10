import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/tsx',
    name: 'tsx',
    component: () => import('@/views/tsx-demo')
  }
]

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/' : '/vue3-1/'),
  routes
})

export const installRouter = (app: App) => {
  app.use(router)
}

export default router

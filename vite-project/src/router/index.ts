import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/home.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory('vite'),
  // history: createWebHashHistory(),
  routes
})

export default router

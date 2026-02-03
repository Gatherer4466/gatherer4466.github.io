import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Test from '@/views/TestRouting.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

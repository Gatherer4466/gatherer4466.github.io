import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Test from '@/views/TestRouting.vue'
import Lit from '@/views/LiteratureList.vue'

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
  {
    path: '/literature',
    name: 'literaryReferences',
    component: Lit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

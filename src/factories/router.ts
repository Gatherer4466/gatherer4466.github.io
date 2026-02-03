import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Lit from '@/views/LiteratureList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/literature',
    name: 'sources',
    component: Lit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Lit from '@/views/LiteratureList.vue'

export const routes = [
  {
    path: '/',
    name: 'forside',
    color: '#ff7493',
    component: Home,
  },
  {
    path: '/literature',
    name: 'litteratur',
    color: '#DCBB00',
    component: Lit,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

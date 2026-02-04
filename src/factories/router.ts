import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomeView.vue'
import Lit from '@/views/LiteratureList.vue'

export const routes = [
  {
    path: '/',
    name: 'forside',
    color: '#ff7493',
    inMenu: true,
    component: Home,
  },
  {
    path: '/literature',
    name: 'litteratur',
    color: '#DCBB00',
    inMenu: true,
    component: Lit,
  },

// Handle literally anything that isn't listed here.
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    inMenu: false,
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

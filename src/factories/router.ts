import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'forside',
    color: '#ff7493',
    inMenu: true,
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/produkter',
    name: 'prod',
    color: '#4CAF50',
    inMenu: true,
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/eksperimenter',
    name: 'eksper',
    color: '#FF7043',
    inMenu: true,
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/refleksioner',
    name: 'reflek',
    color: '#EC407A',
    inMenu: true,
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/laering',
    name: 'planer',
    color: '#26A69A',
    inMenu: true,
    component: () => import('@/views/NotFound.vue'),
  },
  {
    path: '/log',
    name: 'log',
    color: '#8D6E63',
    inMenu: true,
    component: () => import('@/views/LogView.vue'),
  },
  {
    path: '/literature',
    name: 'kilder',
    color: '#DCBB00',
    inMenu: true,
    component: () => import('@/views/LiteratureList.vue'),
  },

  // Handle literally anything that isn't listed here.
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    inMenu: false,
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

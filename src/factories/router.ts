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
    path: '/literature',
    name: 'litteratur',
    color: '#DCBB00',
    inMenu: true,
    component: () => import('@/views/LiteratureList.vue'),
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

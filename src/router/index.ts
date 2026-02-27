import { createRouter, createWebHashHistory } from 'vue-router'

export const notFoundView = () => import('@/views/NotFound.vue')

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
    component: () => import('@/features/products/ProductsView.vue'),
  },
  {
    path: '/produkter/web',
    name: 'prod-web',
    inMenu: false,
    component: () => import('@/features/products/web/WebProductsView.vue'),
  },
  {
    path: '/produkter/devops',
    name: 'prod-devops',
    inMenu: false,
    component: () => import('@/features/products/devops/DevopsProductsView.vue'),
  },

  {
    path: '/eksperimenter',
    name: 'eksper',
    color: '#FF7043',
    inMenu: true,
    component: notFoundView,
  },
  {
    path: '/refleksioner',
    name: 'reflek',
    color: '#EC407A',
    inMenu: true,
    component: () => import('@/features/reflection/ReflectionView.vue'),
  },
  {
    path: '/laering',
    name: 'planer',
    color: '#26A69A',
    inMenu: true,
    component: () => import('@/features/learning/LearningView.vue'),
  },
  {
    path: '/log',
    name: 'log',
    color: '#8D6E63',
    inMenu: true,
    component: () => import('@/features/blog/LogView.vue'),
  },
  {
    path: '/literature',
    name: 'kilder',
    color: '#DCBB00',
    inMenu: true,
    component: () => import('@/features/literature/LiteratureList.vue'),
  },

  // Handle literally anything that isn't listed here.
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    inMenu: false,
    component: notFoundView,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

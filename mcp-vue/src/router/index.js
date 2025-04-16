import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../views/Statistics.vue')
  },
  {
    path: '/logs',
    name: 'Logs',
    component: () => import('../views/Logs.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/service-add',
    name: 'ServiceAdd',
    component: () => import('../views/ServiceAdd.vue')
  },
  {
    path: '/service-detail/:id',
    name: 'ServiceDetail',
    component: () => import('../views/ServiceDetail.vue')
  },
  {
    path: '/service-edit/:id',
    name: 'ServiceEdit',
    component: () => import('../views/ServiceEdit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
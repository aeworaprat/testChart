import { createRouter, createWebHistory } from 'vue-router'
import LineView from '../views/LineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'line',
      component: LineView
    },
    {
      path: '/multiLine',
      name: 'multiLine',
      component: () => import('../views/MultiLineView.vue')
    },
    {
      path: '/stackBar',
      name: 'stackBar',
      component: () => import('../views/StackBarView.vue')
    },
    {
      path: '/groupBar',
      name: 'groupBar',
    component: () => import('../views/GroupBarView.vue')
    },
    {
      path: '/groupStackBar',
      name: 'groupStackBar',
    component: () => import('../views/GroupStackBarView.vue')
    }
  ]
})

export default router

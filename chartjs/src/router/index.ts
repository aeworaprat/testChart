import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/line',
      name: 'line',
      component: () => import('../views/LineView.vue')
    },
    {
      path: '/multiline',
      name: 'multiline',
      component: () => import('../views/MultiLineView.vue')
    },
    {
      path: '/stackbar',
      name: 'stackbar',
    component: () => import('../views/StackBarView.vue')
    },
    {
      path: '/groupbar',
      name: 'groupbar',
    component: () => import('../views/GroupBarView.vue')
    },
    {
      path: '/groupstackbar',
      name: 'groupstackbar',
    component: () => import('../views/GroupStackBarView.vue')
    }
  ]
})

export default router

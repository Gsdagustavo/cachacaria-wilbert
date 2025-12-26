import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'

export const RouteDefs = {
  Home: {
    path: '/',
    name: 'Home',
    component: Home,
  },
  About: {
    path: '/about',
    name: 'Sobre',
    component: About,
  },
} satisfies Record<string, RouteRecordRaw>

export const routes = Object.values(RouteDefs)

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router

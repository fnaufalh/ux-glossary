import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Project from './components/Project.vue'
import Role from './components/Role.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/project',
    component: Project
  },
  {
    path: '/role',
    component: Role
  }
]

export const routerHistory = createWebHashHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes
})

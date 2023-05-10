import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import User from './components/User.vue'
import UserDetail from './components/UserDetail.vue'
import Project from './components/Project.vue'
import Role from './components/Role.vue'
import Search from './components/Search.vue'
import AddCopy from './components/AddCopy.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User,
    name: 'User'
  },
  {
    path: '/user/:userId',
    name: 'UserDetail',
    component: UserDetail
  },
  {
    path: '/project',
    component: Project
  },
  {
    path: '/role',
    component: Role
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/addCopy',
    component: AddCopy
  }
]

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes
})

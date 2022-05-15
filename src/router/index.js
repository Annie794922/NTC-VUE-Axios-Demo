import { createRouter, createWebHistory, useRoute } from 'vue-router'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/users/:userId',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Schedule from '../views/Schedule.vue'
import Map from '../views/Map.vue'
import Food from '../views/Food.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/schedule', component: Schedule },
  { path: '/map', component: Map },
  { path: '/food', component: Food },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

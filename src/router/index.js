import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Rovers from '../components/Rovers.vue'
import Latest_Photo from '../components/Latest_Photo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rovers',
    name: 'Rovers',
    component: Rovers
  },
  {
    path: '/latest_photo',
    name: 'Latest_Photo',
    component: Latest_Photo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

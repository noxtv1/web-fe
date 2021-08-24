import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Challenges from '../pages/Challenges.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Challenges',
    name: 'Challenges',
    component: Challenges
  },
  // {
  //   path : 'Challenges/:id',
  //   name : 'ChallengesPage'
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

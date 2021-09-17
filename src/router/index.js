import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Challenges from '../pages/Challenges.vue'
import Commu from '../pages/Commu.vue'
import SingleChallenge from '../pages/SingleChallenge.vue'

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
     {
     path : '/Challenges/:id',
     name : 'SingleChallenge',
     component : SingleChallenge
   },
  {
    path: '/Commu',
    name: 'Commu',
    component: Commu
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

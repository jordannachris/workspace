import Vue from 'vue'
import VueRouter from 'vue-router'
import FaleConosco from '../views/FaleConosco.vue'
import Logos from '../views/Logos.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/views/FaleConosco',
    name: 'FaleConosco',
    component: FaleConosco,
  },

  {
    path: '/Logos',
    name: 'Logos',
    component: Logos
  },

  /*
  {
    path: '/about',
    name: 'About',
    component: 
  } */

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import FaleConosco from '../views/FaleConosco.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/views/FaleConosco',
    name: 'FaleConosco',
    component: FaleConosco,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Template from '../views/Template.vue'
import AddTemplate from '../views/AddTemplate.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/templates',
    name: 'Template', 
    component: Template,
    children: [
      { 
        path: 'add',
        name: 'AddTemplate',
        component: AddTemplate
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

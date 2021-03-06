import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/'
import Login from '../views/login'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  name: 'home',
  component: Home
}, {
  path: '/login',
  component: Login
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

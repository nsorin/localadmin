import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import Applications from './components/applications/applications-main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications
    }
  ]
})

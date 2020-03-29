import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import Pong from './components/Pong.vue'
import CV from './components/CvComponents/CV.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/Hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/pong',
      name: 'pong',
      component: Pong
    },
    {
      path: '/CV',
      name: 'CV',
      component: CV
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

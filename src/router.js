import Vue from 'vue'
import Router from 'vue-router'
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
    }
  ]
})

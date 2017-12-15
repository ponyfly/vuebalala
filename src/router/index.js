import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Playing from '../pages/playing.vue'
import Playend from '../pages/playend.vue'

Vue.use(Router)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/playing', name: 'playing', component: Playing},
  {path: '/playend', name: 'playend', component: Playend},
]

export default new Router({
  mode: 'history',
  routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Navbar from './components/Navbar.vue'
import JsonPost from './views/JsonPost.vue'
import Films from './views/Films.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: { default: Home, header: Navbar }
    },
    {
      path: '/about',
      name: 'about',
      components: { default: About, header: Navbar }
    },
    {
      path: '/jsonpost',
      name: 'JsonPost',
      components: { default: JsonPost, header: Navbar }
    },
    {
      path: '/films',
      name: 'films',
      components: { default: Films, header: Navbar }
    }
  ]
})

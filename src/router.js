import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Navbar from './components/Navbar.vue'
import JsonPost from './views/JsonPost.vue'
import Films from './views/Films.vue'
import FilmDetails from './views/FilmDetails.vue'
import ActorDetails from './views/ActorDetails.vue'

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
    },
    {
      path: '/films/:id',
      name: 'filmDetails',
      components: { default: FilmDetails, header: Navbar }
    },
    {
      path: '/actor/:id',
      name: 'actorDetails',
      components: { default: ActorDetails, header: Navbar }
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
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
      path: '/vue',
      name: 'home',
      components: { default: Home, header: Navbar, footer: Footer }
    },
    {
      path: '/vue/about',
      name: 'about',
      components: { default: About, header: Navbar, footer: Footer }
    },
    {
      path: '/vue/jsonpost',
      name: 'JsonPost',
      components: { default: JsonPost, header: Navbar, footer: Footer }
    },
    {
      path: '/vue/films',
      name: 'films',
      components: { default: Films, header: Navbar, footer: Footer }
    },
    {
      path: '/vue/films/:id',
      name: 'filmDetails',
      components: { default: FilmDetails, header: Navbar, footer: Footer }
    },
    {
      path: '/vue/actor/:id',
      name: 'actorDetails',
      components: { default: ActorDetails, header: Navbar, footer: Footer }
    },
  ]
})

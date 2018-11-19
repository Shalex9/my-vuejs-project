import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueRouter from './vue-router'
import VueResource from 'vue-resource'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-material/dist/vue-material.min.css'

import { MdToolbar, MdButton, MdList, MdTabs, MdField, MdSwitch } from 'vue-material/dist/components'
import Vuetify from 'vuetify'
// import MaterialKit from './plugins/material-kit'

// Vue.use(MaterialKit)
// Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(MdField)
Vue.use(MdSwitch)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdList)
Vue.use(MdTabs)
// Vue.use(MdListItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

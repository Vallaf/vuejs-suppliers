import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import apiKey from '../config.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import {GmapMarker} from 'vue2-google-maps/src/components/marker'

Vue.component('GmapMarker', GmapMarker)

Vue.use(VueGoogleMaps, {
  load: {
    key: apiKey,
  }
})

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

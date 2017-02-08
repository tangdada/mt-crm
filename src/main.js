import Promise from 'promise-polyfill'
window.Promise = window.Promise || Promise

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
sync(store, router)

import './api'
import './filters'

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')

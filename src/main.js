
/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
/*
引入css
 */
import '../static/css/reset.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

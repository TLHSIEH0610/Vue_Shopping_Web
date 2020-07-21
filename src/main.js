import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import './bus.js'
// import VeeValidate from 'vee-validate'
import CurrencyFilter from './filters/filter.js'
import TimeStamp from './filters/timestamp.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
axios.defaults.withCredentials = true
// axios.defaults.credentials = 'include'

// Vue.use(VeeValidate)
Vue.filter('currency', CurrencyFilter)
Vue.filter('stamp', TimeStamp)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

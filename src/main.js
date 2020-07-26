import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import './bus.js'
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import CurrencyFilter from './filters/filter.js'
import TimeStamp from './filters/timestamp.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.component('Loading', Loading)
axios.defaults.withCredentials = true
// axios.defaults.credentials = 'include'

extend('required', {
  ...required,
  message: '此欄位不得為空白，請輸入內容'
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.filter('currency', CurrencyFilter)
Vue.filter('stamp', TimeStamp)

new Vue({
  el: '#app',
  router,
  components: {
    ValidationProvider
  },
  data: () => ({
    value: ''
  }),
  render: h => h(App)
}).$mount('#app')

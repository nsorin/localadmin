import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/main.scss'


import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'
import lodash from 'lodash'

Vue.use(BootstrapVue)
Vue.prototype.$moment = moment
Vue.prototype.$lodash = lodash

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

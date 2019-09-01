import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/main.scss'


import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import BootstrapVue from 'bootstrap-vue'
import App from './app.vue'
import router from './router'
import database from './database'
import AxiosConfig from './axios-config'
import moment from 'moment'
import lodash from 'lodash'

Vue.use(Vuex)

VuexORM.use(VuexORMAxios, {database, http: AxiosConfig})

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})


Vue.use(BootstrapVue)
Vue.prototype.$moment = moment
Vue.prototype.$lodash = lodash

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

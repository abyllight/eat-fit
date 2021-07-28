window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMask from 'v-mask'
import App from "./components/App"
import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.use(VueMask)

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  created() {
    const user = localStorage.getItem('user')
    if(user) {
      this.$store.commit('SET_USER', JSON.parse(user))
    }
  },
  render: h => h(App)
}).$mount('#app')

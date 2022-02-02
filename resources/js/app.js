import axios from "axios";

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMask from 'v-mask'
import App from "./components/App"
import router from './router'
import store from './store/index'

axios.interceptors.response.use(
    function (response) {
        return response;
    }, function (error) {
        switch (error.response.status) {
            case 401:
                store.dispatch('auth/logout').then(() => {})
                break
            case 419:
                store.dispatch('auth/logout').then(() => {})
                break
            default:
                return Promise.reject(error);
        }
});

Vue.use(Vuetify)
Vue.use(VueMask)
console.log('start')
store.dispatch('auth/me').then(() => {
    new Vue({
        vuetify: new Vuetify(),
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})


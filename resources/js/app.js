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
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'
import 'vuetify/dist/vuetify.min.css'


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

const vuetify = new Vuetify()

Vue.use(TiptapVuetifyPlugin, {
    // the next line is important! You need to provide the Vuetify Object to this place.
    vuetify, // same as "vuetify: vuetify"
    // optional, default to 'md' (default vuetify icons before v2.0.0)
    iconsGroup: 'mdi'
})
Vue.use(VueMask)

store.dispatch('auth/me').then(() => {
    new Vue({
        vuetify: new Vuetify(),
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
})


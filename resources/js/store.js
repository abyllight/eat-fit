import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex)

axios.defaults.baseURL = 'https://back.eatandfit.kz'
 //axios.defaults.baseURL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
    state: {
        authenticated: false,
        user: null,
        loading: false,
        alert: {
            isVisible: false,
            msg: '',
            color: '',
            type: 'error'
        }
    },
    mutations: {
        SET_USER(state, userData) {
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
        },
        SET_AUTHENTICATED(state) {
            state.authenticated = true
            localStorage.setItem('authenticated', 'true')
        },
        CLEAR_USER(){
            localStorage.removeItem('user')
            localStorage.removeItem('authenticated')
            location.reload()
        },
        SET_ALERT(state, alertData) {
            state.alert = alertData
        },
        START_LOADING(state, loading) {
            state.loading = loading
        }
    },
    actions: {
        login({ commit }, user) {
            commit('SET_USER', user)
            commit('SET_AUTHENTICATED', true)
        },
        logout({ commit }) {
            commit('CLEAR_USER')
        },
        async showAlert({ commit }, alert) {
            commit('SET_ALERT', alert)

            return new Promise(resolve => {
                const timeout = setTimeout(() => {
                    clearTimeout(timeout);
                    commit('SET_ALERT', {
                        isVisible: false,
                        msg: '',
                        color: '',
                        type: 'error'
                    });
                    resolve();
                }, 3000);
            });
        },
        start_loading({ commit }, loading){
            commit('START_LOADING', loading)
        }
    },
    getters: {
        isLogged: state => !!state.authenticated,
        alert: state => state.alert,
        user: state => state.user,
        loading: state => state.loading
    }
})

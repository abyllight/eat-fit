import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import auth from "./auth"
import admin from "./admin";

Vue.use(Vuex)

axios.defaults.baseURL = 'https://back.eatandfit.kz'
//axios.defaults.baseURL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
    modules: {
        auth: auth,
        //admin: admin
    },
    state: {
        alert: {
            isVisible: false,
            msg: '',
            color: '',
            type: 'error'
        }
    },
    mutations: {
        SET_ALERT(state, alertData) {
            state.alert = alertData
        }
    },
    actions: {
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
        }
    },
    getters: {
        alert: state => state.alert
    }
})

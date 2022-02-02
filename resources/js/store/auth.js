export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },
    getters: {
        authenticated: state => !!state.authenticated,
        user: state => state.user
    },
    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },
        SET_USER(state, userData) {
            state.user = userData
        }
    },
    actions: {
        async login({ commit }, user) {
            commit('SET_AUTHENTICATED', true)
            commit('SET_USER', user)
            localStorage.setItem('authenticated', 'true')
        },
        async logout({ commit }) {
            commit('SET_AUTHENTICATED', false)
            localStorage.removeItem('authenticated')
            location.reload()
        },
        async me({ commit }){
            console.log('auth')
            const auth = localStorage.getItem('authenticated')

            if (auth) {
                await axios.get('/api/user').then(response => {
                    commit('SET_AUTHENTICATED',  true)
                    commit('SET_USER', response.data.user)
                }).catch(() => {
                    commit('SET_AUTHENTICATED', false)
                    commit('SET_USER', null)
                })
            }
        }
    }
}

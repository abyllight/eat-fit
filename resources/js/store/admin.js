export default {
    namespaced: true,

    state: {
        week: null,
        cuisine: null
    },
    getters: {
        week: state => state.week,
        cuisine: state => state.cuisine
    },
    mutations: {
        SET_WEEK(state, value) {
            state.week = value
        },
        SET_CUISINE(state, value) {
            state.cuisine = value
        },
    },
    actions: {
        async getWeek({ commit }) {
            await axios.get('/api/week/get').then(response => {
                commit('SET_WEEK', response.data)
                localStorage.setItem('week', JSON.stringify(response.data))
            })
        },
        async getCuisine({ commit }) {
            await axios.get('/api/cuisine/duty').then(response => {
                commit('SET_CUISINE', response.data)
                localStorage.setItem('cuisine', JSON.stringify(response.data))
            })
        }
    }
}

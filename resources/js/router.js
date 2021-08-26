import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            component: () => import('./components/NotFound')
        },
        {
            path: '/login',
            name: 'login',
            meta: { auth: false },
            component: () => import('./components/Login')
        },
        {
            path: '/',
            name: 'dashboard',
            meta: { auth: true },
            component: () => import('./components/Dashboard')
        },
        {
            path: '/couriers',
            name: 'couriers',
            meta: { auth: true },
            component: () => import('./components/Couriers')
        },
        {
            path: '/couriers/:id',
            name: 'password',
            meta: { auth: true },
            component: () => import('./components/UpdatePassword')
        },
        {
            path: '/orders',
            name: 'orders',
            meta: { auth: true },
            component: () => import('./components/Orders')
        },
        {
            path: '/map',
            name: 'map',
            meta: { auth: true },
            component: () => import('./components/Map')
        },
        {
            path: '/list',
            name: 'list',
            meta: { auth: true },
            component: () => import('./components/OrderList')
        },
        {
            path: '/report',
            name: 'report',
            meta: { auth: true },
            component: () => import('./components/Report')
        },
        {
            path: '/cuisine',
            name: 'cuisine',
            meta: { auth: true },
            component: () => import('./components/Cuisine')
        },
        {
            path: '/custom',
            name: 'custom',
            meta: { auth: true },
            component: () => import('./components/CustomDishes')
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            meta: { auth: true },
            component: () => import('./components/Ingredients')
        },
        {
            path: '/select',
            name: 'select',
            meta: { auth: true },
            component: () => import('./components/Select')
        },
    ]
})

router.beforeEach((to, from, next) => {

    const currentUser = localStorage.getItem('authenticated')
    const requireAuth = to.matched.some(record => record.meta.auth)

    if(requireAuth && !currentUser) {
        next('/login')
    }else if(currentUser && to.name === 'login'){
        next('/')
    }else {
        next()
    }
})

export default router;

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
            path: '/my-orders',
            name: 'my_orders',
            meta: { auth: true },
            component: () => import('./components/MyOrders')
        },
        {
            path: '/roles',
            name: 'roles',
            meta: { auth: true },
            component: () => import('./components/Roles/Roles')
        },
        {
            path: '/roles/create',
            name: 'roles_create',
            meta: { auth: true },
            component: () => import('./components/Roles/CreateRole')
        },
        {
            path: '/roles/:id/edit',
            name: 'roles_edit',
            meta: { auth: true },
            component: () => import('./components/Roles/EditRole')
        },
        {
            path: '/users',
            name: 'users',
            meta: { auth: true },
            component: () => import('./components/Users/Users')
        },
        {
            path: '/users/create',
            name: 'users_create',
            meta: { auth: true },
            component: () => import('./components/Users/CreateUser')
        },
        {
            path: '/users/:id/edit',
            name: 'users_edit',
            meta: { auth: true },
            component: () => import('./components/Users/EditUser')
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
            component: () => import('./components/Logistics/Map')
        },
        {
            path: '/list',
            name: 'list',
            meta: { auth: true },
            component: () => import('./components/Logistics/OrderList')
        },
        {
            path: '/reports',
            name: 'report',
            meta: { auth: true },
            component: () => import('./components/Logistics/Report')
        },
        {
            path: '/cuisines',
            name: 'cuisine',
            meta: { auth: true },
            component: () => import('./components/Kitchen/Cuisine')
        },
        {
            path: '/custom',
            name: 'custom',
            meta: { auth: true },
            component: () => import('./components/Kitchen/CustomDishes')
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            meta: { auth: true },
            component: () => import('./components/Kitchen/Ingredients')
        },
        {
            path: '/select',
            name: 'select',
            meta: { auth: true },
            component: () => import('./components/Kitchen/Select')
        },
        {
            path: '/promocodes',
            name: 'promocode',
            meta: { auth: true },
            component: () => import('./components/Promocodes')
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

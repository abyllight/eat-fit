import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from "./store/auth";
import store from "./store/index.js";

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
            path: '/access',
            name: 'noAccess',
            meta: {
                auth: false,
                roles: []
            },
            component: () => import('./components/NoAccess')
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                auth: false,
                roles: []
            },
            component: () => import('./components/Login')
        },
        {
            path: '/',
            name: 'dashboard',
            meta: {
                auth: true,
                roles: []
            },
            component: () => import('./components/Dashboard')
        },
        {
            path: '/my-orders',
            name: 'my_orders',
            meta: {
                auth: true,
                roles: ['courier', 'logistic']
            },
            component: () => import('./components/MyOrders')
        },
        {
            path: '/roles',
            name: 'roles',
            meta: {
                auth: true,
                roles: ['admin']
            },
            component: () => import('./components/Admin/Roles')
        },
        {
            path: '/users',
            name: 'users',
            meta: {
                auth: true ,
                roles: ['admin', 'logistic']
            },
            component: () => import('./components/Admin/Users')
        },
        {
            path: '/orders',
            name: 'orders',
            meta: {
                auth: true,
                roles: ['admin', 'logistic']
            },
            component: () => import('./components/Orders')
        },
        {
            path: '/map',
            name: 'map',
            meta: {
                auth: true,
                roles: ['admin', 'logistic']
            },
            component: () => import('./components/Logistics/Map')
        },
        {
            path: '/list',
            name: 'list',
            meta: {
                auth: true,
                roles: ['admin', 'logistic']
            },
            component: () => import('./components/Logistics/OrderList')
        },
        {
            path: '/reports',
            name: 'report',
            meta: {
                auth: true,
                roles: ['admin', 'logistic']
            },
            component: () => import('./components/Logistics/Report')
        },
        {
            path: '/select',
            name: 'select',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Kitchen/Select')
        },
        {
            path: '/rations',
            name: 'rations',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Kitchen/Rations')
        },
        {
            path: '/cuisines',
            name: 'cuisine',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Kitchen/Cuisine')
        },
        {
            path: '/dishes',
            name: 'dishes',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Kitchen/Dishes')
        },
        {
            path: '/category',
            name: 'category',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Kitchen/Category')
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Kitchen/Ingredients')
        },
        {
            path: '/promocodes',
            name: 'promocode',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Admin/Promocodes')
        },
        {
            path: '/products',
            name: 'products',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/Products')
        },
        {
            path: '/brands',
            name: 'brands',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/Brands')
        },
        {
            path: '/product-categories',
            name: 'product_categories',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/ProductCategory')
        },
    ]
})

router.beforeResolve((to, from, next) => {

    const authenticated = localStorage.getItem('authenticated')
    const requireAuth = to.meta.auth

    if(to.name === 'login' && authenticated){
        next({name: 'dashboard'})
    }else if(requireAuth){
        if(!authenticated){
            next({name: 'login'})
        }else{
            if (hasAccess(to.meta.roles)){
                next()
            }else {
                next({name: 'noAccess'})
            }
        }
    }else{
        next()
    }
})

function hasAccess(roles) {
    const user = auth.state.user

    if (user.is_admin) return true
    if (roles.length === 0) return true
    let has_access = user && roles.some(role => user.role_slugs.includes(role))
    return !!has_access;
}

export default router;

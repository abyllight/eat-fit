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
            path: '/management',
            name: 'management',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Admin/Management')
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
            path: '/providers',
            name: 'providers',
            meta: {
                auth: true,
                roles: ['admin', 'purchase']
            },
            component: () => import('./components/Purchase/Providers')
        },
        {
            path: '/p-categories',
            name: 'p_categories',
            meta: {
                auth: true,
                roles: ['admin', 'purchase']
            },
            component: () => import('./components/Purchase/Categories')
        },
        {
            path: '/purchase-list',
            name: 'purchase_list',
            meta: {
                auth: true,
                roles: ['admin', 'purchase']
            },
            component: () => import('./components/Purchase/List')
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
            component: () => import('./components/Dietology/Select')
        },
        {
            path: '/select/:id/:r_id',
            name: 'select-details',
            props: (route) => {
                const id = parseInt(route.params.id)
                const r_id = parseInt(route.params.r_id)
                return {id, r_id}
            },
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/SelectDetails.vue')
        },
        {
            path: '/select-rations',
            name: 'select-rations',
            meta: {
                auth: true,
                roles: ['admin', 'diet', 'kitchen']
            },
            component: () => import('./components/Kitchen/SelectRations')
        },
        {
            path: '/stickers/:id',
            name: 'stickers',
            props: true,
            meta: {
                auth: true,
                roles: ['admin', 'diet', 'kitchen']
            },
            component: () => import('./components/Kitchen/Stickers')
        },
        {
            path: '/grid',
            name: 'grid',
            props: true,
            meta: {
                auth: true,
                roles: ['admin', 'diet', 'kitchen']
            },
            component: () => import('./components/Kitchen/Grid.vue')
        },
        {
            path: '/cards',
            name: 'cards',
            props: true,
            meta: {
                auth: true,
                roles: ['admin', 'kitchen']
            },
            component: () => import('./components/Kitchen/CardNGroup.vue')
        },
        {
            path: '/rations',
            name: 'rations',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/Rations')
        },
        {
            path: '/tableware',
            name: 'tableware',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/Tableware.vue')
        },
        {
            path: '/cuisines',
            name: 'cuisine',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/Cuisine')
        },
        {
            path: '/cuisine-dishes/:id',
            name: 'cuisine_dishes',
            props: true,
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/CuisineDishes')
        },
        {
            path: '/cuisine-dishes/:id/edit',
            name: 'cuisine_dishes_edit',
            props: true,
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/CuisineDishesEdit')
        },
        {
            path: '/cuisine-dishes/:id/:r_id/create',
            name: 'cuisine_dishes_create',
            props: (route) => {
                const id = parseInt(route.params.id)
                const r_id = parseInt(route.params.r_id)
                return {id, r_id}
            },
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/CuisineDishesCreate')
        },
        {
            path: '/dishes',
            name: 'dishes',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/Dishes')
        },
        {
            path: '/category',
            name: 'category',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/Category')
        },
        {
            path: '/ingredients',
            name: 'ingredients',
            meta: {
                auth: true,
                roles: ['admin', 'diet']
            },
            component: () => import('./components/Dietology/Ingredients')
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
            path: '/shop-orders',
            name: 'shop_orders',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/ShopOrders')
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
        {
            path: '/b-categories',
            name: 'b_categories',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/BCategories')
        },
        {
            path: '/b-values',
            name: 'b_values',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/BValues')
        },
        {
            path: '/b-mix',
            name: 'b_mix',
            meta: {
                auth: true,
                roles: ['admin', 'office']
            },
            component: () => import('./components/Shop/BMixes')
        },
        {
            path: '/purchase-list-kitchen',
            name: 'purchase_list_kitchen',
            meta: {
                auth: true,
                roles: ['admin', 'kitchen']
            },
            component: () => import('./components/Kitchen/PurchaseList')
        },
        {
            path: '/marat',
            name: 'marat',
            meta: {
                auth: true,
                roles: ['admin', 'kitchen']
            },
            component: () => import('./components/Kitchen/Marat.vue')
        },
        {
            path: '/broadcast-menu',
            name: 'broadcast_menu',
            meta: {
                auth: true,
                roles: ['admin']
            },
            component: () => import('./components/Admin/BroadcastMenu.vue')
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

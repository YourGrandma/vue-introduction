import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () => import('@/layouts/default.vue'),
        children: [{
            path: '',
            name: 'Home',
            component: () => import('@/views/Home.vue'),
        }]
    },
    {
        path: '/about',
        component: () => import('@/layouts/default.vue'),
        children: [{
            path: '',
            name: 'About',
            component: () => import('@/views/About.vue'),
        }]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router

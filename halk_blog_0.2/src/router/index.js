import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouterMap = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: () => import('@/views/home')},
    {path: '/about', component: () => import('@/views/about')},
    {path: '/sort', component: () => import('@/views/sort')},
    {path: '/classify', component: () => import('@/views/classify')},
    {path: '/tag', component: () => import('@/views/tag')},
    {path: '/messageBoard', component: () => import('@/views/messageBoard')},
    {path: '/messageBoard', component: () => import('@/views/messageBoard')},
    {path: '/contentDetail', component: () => import('@/components/contentDetail/ContentDetail')}
]

const router = new VueRouter({
    routes: constantRouterMap
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouterMap = [
    {path: '/', redirect: '/index'},
    {
        path: '/index',
        component: () => import('@/views/index'),
        children: [
            {path: '/', component: () => import('@/views/home')},
            {path: '/about', component: () => import('@/views/about')},
            {path: '/sort', component: () => import('@/views/sort')},
            {path: '/classify', component: () => import('@/views/classify')},
            {path: '/tag', component: () => import('@/views/tag')},
            {path: '/messageBoard', component: () => import('@/views/messageBoard')},
            {path: '/messageBoard', component: () => import('@/views/messageBoard')},
            {path: '/contentDetail', component: () => import('@/components/content/ContentDetail')}
        ]
    },
    {path: '/404', component: () => import('@/views/404')},
    {path: '/500', component: () => import('@/views/500')},
    {path: '/502', component: () => import('@/views/502')},
    {path: '/*', redirect: '/404'},

]

const router = new VueRouter({
    routes: constantRouterMap,
    /*每次跳转跳转页面时回到顶部*/
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

export default router

// 设置页面路由跳转规则
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './components/Layout'
import Home from './components/Home'
import Notice from './components/NEWS/Notice'

Vue.use(VueRouter)

// 路由跳转规则
export const routes = [
    {
        path: '/',
        name: 'index',
        component: Layout,
        children:[
            {
                path: 'home',
                name: '0',
                component: Home,
            },
            {
                path: 'notice',
                name: '1-1',
                component: Notice,
            },
            {
                path: 'home',
                name: '1-2',
                component: Layout,
            },
            {
                path: 'home',
                name: '1-3',
                component: Layout,
            },
            {
                path: 'home',
                name: '1-4',
                component: Layout,
            },
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
]

const router =  new VueRouter({
    routes,
    mode: 'history'
})

export default router

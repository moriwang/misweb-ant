// 设置页面路由跳转规则
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './components/common/Layout'
import Home from './components/Home'
import Notice from './components/News/Notice'
import BriefIntroduction from "@/components/Introduction/BriefIntroduction";
import EducationAim from "@/components/Introduction/EducationAim";
import Teachers from "@/components/Introduction/Teachers";
import AdmissionsBrochure from "@/components/Enrollment/AdmissionsBrochure";
import SuccessiveProgram from "@/components/Enrollment/SuccessiveProgram";

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
            {
                path: 'about',
                name: '2-1',
                component: BriefIntroduction
            },
            {
                path:'goals',
                name: '2-2',
                component: EducationAim
            },
            {
                path: 'teachers',
                name: '2-3',
                component: Teachers
            },
            {
                path: 'admission',
                name: '3-1',
                component: AdmissionsBrochure
            },
            {
                path: 'successive-program',
                name: '3-2',
                component: SuccessiveProgram
            }
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

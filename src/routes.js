// 设置页面路由跳转规则
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './components/common/Layout'
import Home from './components/Home'
import AdministrativeAnnouncement from './components/News/AdministrativeAnnouncement'
import EnrollmentInformation from "@/components/News/EnrollmentInformation";
import Competition from "@/components/News/Competition";
import CampusRecruit from "@/components/News/CampusRecruit";
import BriefIntroduction from "@/components/Introduction/BriefIntroduction";
import EducationAim from "@/components/Introduction/EducationAim";
import Teachers from "@/components/Introduction/Teachers";
import AdmissionsBrochure from "@/components/Enrollment/AdmissionsBrochure";
import SuccessiveProgram from "@/components/Enrollment/SuccessiveProgram";
import Publication from "@/components/Academic/Publication";
import Graduation from "@/components/Academic/Graduation";
import EcResearch from "@/components/Academic/EcResearch";
import Course from "@/components/Student/Course";
import Degree from "@/components/Student/Degree";
import Download from "@/components/Download/Download";

Vue.use(VueRouter)

// 路由跳转规则
export const routes = [
    {
        path: '/',
        component: Layout,
        children:[
            {
                path: '',
                name: '0',
                component: Home,
            },
            {
                path: 'administrative-announcement',
                name: '1-1',
                component: AdministrativeAnnouncement,
            },
            {
                path: 'enrollment-information',
                name: '1-2',
                component: EnrollmentInformation,
            },
            {
                path: 'competition',
                name: '1-3',
                component: Competition,
            },
            {
                path: 'campus-recruit',
                name: '1-4',
                component: CampusRecruit,
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
            },
            {
                path: 'publication',
                name: '4-1',
                component: Publication
            },
            {
                path: 'graduation',
                name: '4-2',
                component: Graduation
            },
            {
                path: 'ecommerce-research',
                name: '4-3',
                component: EcResearch
            },
            {
                path: 'curriculum-planning',
                name: '5-1',
                component: Course
            },
            {
                path: 'degree-requirements',
                name: '5-2',
                component: Degree
            },
            {
                path: 'downloads',
                name: '6-1',
                component: Download
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

import axios from '@/axios'

export function newsManager(parameter) {
    return axios({
        method: 'get',
        url: '/api/news',
        params: parameter
    })
}

export function linkManager(parameter) {
    return axios({
        method: 'get',
        url: '/api/link',
        params: parameter
    })
}

export function pageSlide(parameter) {
    return axios({
        method: 'get',
        url: '/api/slide',
        params: parameter
    })
}

export function teacherManager(parameter) {
    return axios({
        method: 'get',
        url: '/api/teacher',
        params: parameter
    })
}

export function CourseManager(parameter) {
    return axios({
        method: 'get',
        url: '/api/course',
        params: parameter
    })
}

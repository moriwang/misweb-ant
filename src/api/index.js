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

export function teacherList() {
    return axios({
        method: 'get',
        url: '/api/teachers',
    })
}



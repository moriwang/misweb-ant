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

export function courseManager(parameter) {
    return axios({
        method: 'get',
        url: '/api/course',
        params: parameter
    })
}


export function paperyearList(parameter) {
    return axios({
        method: 'get',
        url: '/api/paperyear',
        params: parameter
    })
}


export function paperManager(parameter) {
    return axios({
        method: 'get',
        url: '/api/paper',
        params: parameter
    })
}

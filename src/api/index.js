import axios from '@/axios'

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



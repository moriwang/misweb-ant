import axios from '@/axios'

export function pageSlide(parameter) {
    return axios({
        method: 'get',
        url: '/api/' + parameter.pageId,
        params: parameter
    })
}

export function teacherList() {
    return axios({
        method: 'get',
        url: '/api/teachers',
    })
}



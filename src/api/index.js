import axios from '@/axios'

export function getNews(parameter) {
    return axios({
        method: 'get',
        url: '/api/getnews',
        params: parameter
    })
}

export function getMoreNews(parameter) {
    return axios({
        method: 'get',
        url: '/api/getmorenews',
        params: parameter
    })
}

export function getLink(parameter) {
    return axios({
        method: 'get',
        url: '/api/getlink',
        params: parameter
    })
}

export function getSlide(parameter) {
    return axios({
        method: 'get',
        url: '/api/getslide',
        params: parameter
    })
}

export function getTeacher(parameter) {
    return axios({
        method: 'get',
        url: '/api/getteacher',
        params: parameter
    })
}

export function getCourse(parameter) {
    return axios({
        method: 'get',
        url: '/api/getcourse',
        params: parameter
    })
}


export function getPaperYearList(parameter) {
    return axios({
        method: 'get',
        url: '/api/getpaperyear',
        params: parameter
    })
}


export function getPaper(parameter) {
    return axios({
        method: 'get',
        url: '/api/getpaper',
        params: parameter
    })
}

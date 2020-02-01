import moment from "moment"

export function getYear() {
    return moment().format('YYYY')
}

export function getDate(date) {
    return moment(date).format('YYYY/MM/DD')
}

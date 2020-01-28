import moment from "moment"

export function getYear() {
    return moment().format('YYYY')
}

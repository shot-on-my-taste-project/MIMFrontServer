import axios from 'axios';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const BASE_URL = '/'

const axiosAPI = (url, options) => {
    const instance = axios.create({ baseURL: url, ...options })
    return instance
}

const axiosAuthAPI = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        headers: {
            "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
            "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
        },
        ...options,
    })
    return instance
}

const saveToken = (res) => {
    removeCookie('access-token')
    localStorage.removeItem('refresh-token')
    localStorage.setItem("refresh-token", res.headers['x-refresh-token']);
    setCookie("access-token", res.headers['x-access-token']);
}

export const defaultInstance = axiosAPI(BASE_URL)
export const authInstance = axiosAuthAPI(BASE_URL)
export default saveToken

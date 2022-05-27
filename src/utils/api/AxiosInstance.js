import axios from 'axios';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const BASE_URL = '/'

const axiosAPI = (url, options) => {
    const instance = axios.create({baseURL: url, ...options})
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

export const defaultInstance = axiosAPI(BASE_URL)
export const authInstance = axiosAuthAPI(BASE_URL)
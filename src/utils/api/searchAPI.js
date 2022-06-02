import { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const Api = {
    getResultDetail: async (movieId) => {
        try {
            const res = await defaultInstance.get('/movies/' + movieId)
            return res.data
        } catch(e) {
            return e
        }
    },

    getMovieSearch: async (search) => {
        try {
            const res = await defaultInstance.get(`/movies?title=${search}&page=0&size=3`)
            return res.data.content
        } catch(e) {
            return e
        }
    },

    getPostingSearch: async (movieId, currentPage, size, search) => {
        try {
            const res = await defaultInstance.get(`postings/board/${movieId}/query?page=${currentPage}&size=${size}&query=${search}`)
            return res.data.content
        } catch(e) {
            return e
        }
    },

    getSceneSearchResult: async (search) => {
        try {
            const res = await defaultInstance.get(`/scean?input=${search}`)
            return res.data
        } catch(e) {
            return e
        }
    },

    getLineSearchResult: async (search) => {
        try {
            const res = await defaultInstance.get(`/line?input=${search}`)
            return res.data
        } catch(e) {
            return e
        }
    }
    
}

export default Api;
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
    }
    
}

export default Api;
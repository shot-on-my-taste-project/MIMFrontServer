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
    
}

export default Api;
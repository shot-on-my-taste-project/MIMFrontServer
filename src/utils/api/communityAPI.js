import saveToken, { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';
import Api2 from "./searchAPI"
const Api = {
    getAllBoard: async () => {
        try {
            const res = await defaultInstance.get('/boards?page=1&size=3')
            return res.data
        } catch(e) {
            return e
        }
    },

    getAllFreeBoardPosts: async (currentPage, size) => {
        try {
            const res = await defaultInstance.get(`/postings/board/1?page=${currentPage}&size=${size}`)
            return res.data
        } catch(e) {
            return e
        } 
    },

    getMovies: async (ids) => {
        try {
          const res = await authInstance.get(`/movies/ids?ids=${ids}`)
          saveToken(res);
          return res.data
        } catch (e) {
          return e
        }
      },

    getAllMovieBoardPosts: async (movieId, currentPage, size) => {
        try {
            const res = await defaultInstance.get(`/postings/board/${movieId}?page=${currentPage}&size=${size}`)
            return res.data['content']
        } catch(e) {
            return e
        } 
    },

    writeFreeBoardPost: async (data) => {
        try {
            const res = await authInstance.post("/postings", {
                "content": data.content,
                "movieBoardId": 1,
                "title": data.title,
                "userId": getCookie('user-id')
            })
            saveToken(res)
            alert("작성이 완료되었습니다")
            window.location.href = "/community/free"
        } catch(e) {
            return e
        }
    }
}

export default Api;
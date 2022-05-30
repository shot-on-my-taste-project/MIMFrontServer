import saveToken, { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const Api = {
    getAllBoard: async () => {
        try {
            const res = await authInstance.get('/boards?page=2&size=3')
            return res.data
        } catch(e) {
            return e
        }
    },

    getBoard: async(movieId) => {
        try {
            const res = await authInstance.get(`/boards/movie/${movieId}`)
            return res.data
        } catch(e) {
            return e
        }
    },

    getAllFreeBoardPosts: async (currentPage, size) => {
        try {
            const res = await authInstance.get(`/postings/board/1?page=${currentPage}&size=${size}`)
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

    getAllMovieBoardPosts: async (movieBoardId, currentPage, size) => {
        try {
            const res = await authInstance.get(`/postings/board/${movieBoardId}?page=${currentPage}&size=${size}`)
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
    },

    writeMovieBoardPost: async (data) => {
        try {
            const res = await authInstance.post("/postings", {
                "content": data.content,
                "movieBoardId": data.movieBoardId,
                "title": data.title,
                "userId": getCookie('user-id')
            })
            saveToken(res)
            alert("작성이 완료되었습니다")
            window.location.href = "/community/movie/" + data.movieId
        } catch(e) {
            return e
        }
    },

    addFavoriteMovie: async(movieId) => {
        try {
            const res = await authInstance.post("/favorite-movies", {
                "userId": getCookie('user-id'),
                "movieId": movieId
            })
            saveToken(res)
        } catch(e) {
            return e
        }
    },

    deleteFavoriteMovie: async(movieId) => {
        try {
            const res = await authInstance.delete(`/favorite-movies/user/${getCookie('user-id')}/movie/${movieId}`)
            saveToken(res)
        } catch(e) {
            return e
        }
    },

    isFavoriteMovie: async(movieId) => {
        try {
            const res = await authInstance.get(`/favorite-movies/user/${getCookie('user-id')}/movie/${movieId}`)
            saveToken(res)
            return res.data
        } catch(e) {
            return e
        }
    },

    getPostDetail: async(boardId, postId) => {
        try {
            const res = await authInstance.get(`/postings/board/${boardId}/posting-number/${postId}`)
            saveToken(res)
            return res.data
        } catch(e) {
            return e
        }
    },

    getAllComments: async(boardId, postingNumber) => {
        try{
            const res = await authInstance.get(`comments/board/${boardId}/posting-number/${postingNumber}?page=0&size=5`)
            saveToken(res)    
            return res.data['content']       
        } catch(e) {
            return e
        }
    },

    writeComment: async(data) => {
        try {
            const res = await authInstance.post("/comments", data)
            saveToken(res)
            return res.data
        } catch(e) {
            return e
        }
    },

    updatePost: async() => {

    },

    updateComment: async() => {

    },

    deletePost: async() => {

    },

    deleteComment: async() => {
        
    }
}

export default Api;
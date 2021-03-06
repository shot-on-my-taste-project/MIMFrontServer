import saveToken, { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const Api = {
    getAllBoard: async () => {
        try {
            const res = await authInstance.get('/boards?page=0&size=3')
            return res.data
        } catch(e) {
            return e
        }
    },

    getBoard: async(movieId) => {
        try {
            const res = await authInstance.get(`/boards/movie/${movieId}`)
            // saveToken(res);
            return res.data
        } catch(e) {
            return false
        }
    },

    getAllFreeBoardPosts: async (currentPage, size) => {
        try {
            const res = await authInstance.get(`/postings/board/1?page=${currentPage}&size=${size}`)
            // saveToken(res);
            return res.data
        } catch(e) {
            return e
        } 
    },

    getMovies: async (ids) => {
        try {
          const res = await authInstance.get(`/movies/ids?ids=${ids}`)
        //   saveToken(res);
          return res.data
        } catch (e) {
          return e
        }
      },

    getAllMovieBoardPosts: async (movieBoardId, currentPage, size) => {
        try {
            const res = await authInstance.get(`/postings/board/${movieBoardId}?page=${currentPage}&size=${size}`)
            // saveToken(res);
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
            // saveToken(res)
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
            // saveToken(res)
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
            // saveToken(res)
        } catch(e) {
            return e
        }
    },

    deleteFavoriteMovie: async(movieId) => {
        try {
            const res = await authInstance.delete(`/favorite-movies/user/${getCookie('user-id')}/movie/${movieId}`)
            // saveToken(res)
        } catch(e) {
            return e
        }
    },

    isFavoriteMovie: async(movieId) => {
        try {
            const res = await authInstance.get(`/favorite-movies/user/${getCookie('user-id')}/movie/${movieId}`)
            // saveToken(res)
            return res.data
        } catch(e) {
            return e
        }
    },

    getPostDetail: async(boardId, postId) => {
        try {
            const res = await authInstance.get(`/postings/board/${boardId}/posting-number/${postId}`)
            // saveToken(res)
            return res.data
        } catch(e) {
            return e
        }
    },

    getPostDetail2: async(postId) => {
        try {
            const res = await authInstance.get(`/postings/${postId}`)
            // saveToken(res)
            return res.data
        } catch(e) {
            return e
        }
    },

    getAllComments: async(boardId, postingNumber) => {
        try{
            const res = await authInstance.get(`comments/board/${boardId}/posting-number/${postingNumber}?page=0&size=5`)
            // saveToken(res)    
            return res.data['content']       
        } catch(e) {
            return e
        }
    },

    writeComment: async(data, movieId, postId) => {
        try {
            const res = await authInstance.post("/comments", {
                "userId": getCookie("user-id"),
                "content": data.content,
                "depth": data.depth,
                "postingId": data.postingId
            })
            // saveToken(res)
            alert("댓글이 작성되었습니다.")
            if(movieId === "1")
                window.location.href= `/community/free/${postId}`
            else
                window.location.href= `/community/movie/${movieId}/${postId}`
        } catch(e) {
            return e
        }
    },

    updatePost: async(postId, data, post) => {
        try {
            const res = await authInstance.put(`/postings/${postId}`, data)
            // saveToken(res)
            alert("수정이 완료되었습니다.")
            if(data.movieId === "1")
                window.location.href= `/community/free/${post.postingNumber}`
            else
                window.location.href= `/community/movie/${data.movieId}/${post.postingNumber}`
        } catch(e) {
            return e
        }

    },

    updateComment: async(sentence, movieId, postNumber, commentId) => {
        try {
            const res = await authInstance.put(`/comments/${commentId}`, {
                "content": sentence
            })
            // saveToken(res)
            console.log(movieId, postNumber)
            alert("수정이 완료되었습니다.")
            if(movieId === "1") 
                window.location.href = `/community/free/${postNumber}`
            else
                window.location.href = `/community/movie/${movieId}/${postNumber}`
        } catch(e) {
            return e
        }
    },

    deletePost: async(movieId, postId) => {
        try {
            const res = await authInstance.delete(`/postings/${postId}`)
            // saveToken(res)
            alert("게시글이 삭제되었습니다.")
            if(movieId === "1")
                window.location.href= `/community/free`
            else
                window.location.href= `/community/movie/${movieId}`
        } catch(e) {
            return e
        }
    },

    deleteComment: async(movieId, postId, commentId) => {
        try {
            const res = await authInstance.delete(`/comments/${commentId}`)
            // saveToken(res)
            alert("댓글이 삭제되었습니다.")
            if(movieId === "1")
                window.location.href= `/community/free/${postId}`
            else
                window.location.href= `/community/movie/${movieId}/${postId}`
        } catch(e) {
            return e
        }
    },

    reportPost: async(sentence, movieId, postId) => {
        try {
            const res = await authInstance.post(`/report-postings`, {
                "postingId": postId,
                "reportReason": sentence
            })
            // saveToken(res)
            alert("정상적으로 신고되었습니다.")
            if(movieId === "1")
                window.location.href= `/community/free`
            else
                window.location.href= `/community/movie/${movieId}`
        } catch(e) {
            return e
        }
    },

    reportComment: async(sentence, movieId, postId, commentId) => {
        try {
            const res = await authInstance.post(`/report-comments`, {
                "commentId": commentId,
                "reportReason": sentence
            })
            // saveToken(res)
            alert("정상적으로 신고되었습니다.")
            if(movieId === "1")
                window.location.href= `/community/free/${postId}`
            else
                window.location.href= `/community/movie/${movieId}/${postId}`
        } catch(e) {
            console.log(e)
            return e
        }
    },

    reReplyComment: async(sentence, movieId, postId, postNum, commentId) => {
        try {
            const res = await authInstance.post("/comments", {
                "commentGroup": commentId,
                "content": sentence,
                "depth": 1,
                "postingId": postId,
                "userId": getCookie("user-id")
            })
            alert("댓글이 등록되었습니다.")
            if(movieId === "1")
                window.location.href= `/community/free/${postNum}`
            else
                window.location.href= `/community/movie/${movieId}/${postNum}`
        } catch(e) {
            console.log(e)
            return e
        }
    },

    RequestBoard: async(movieId) => {
        try {
            const res = await authInstance.post(`/request-boards/movie/${movieId}`)
            alert("정상적으로 요청되었습니다.\n개설 될 때까지 조금만 기다려 주세요!")
        } catch(e) {

        } 
    }
}

export default Api;
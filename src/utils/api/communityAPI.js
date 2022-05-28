import { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';
import Api2 from "./searchAPI"
const Api = {
    getAllBoard: async () => {
        const boardArr = []
        try {
            const res = await defaultInstance.get('/boards?page=0&size=3')
            console.log(res.data['content'])
            res.data['content'].map((board) => {
                console.log(board.boardId)
                boardArr.push(board.boardId)
            })
            return boardArr
        } catch(e) {
            return e
        }
    }
}

export default Api;
import axios from 'axios';
import saveToken, { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const Api = {
  getRequests: async (currentPage) => {
    try {
      const res = await authInstance.get(`/request-boards?page=${currentPage}&size=3`)
      saveToken(res);
      return res.data
    } catch (e) {
      return e
    }
  },
  getBoards: async (currentPage) => {
    try {
      const res = await authInstance.get(`/boards?page=${currentPage}&size=3`)
      saveToken(res);
      return res.data
    } catch (e) {
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
  makeBoard: async (e) => {
    try {
      const { id } = e.target;
      const res = await authInstance.post(`/request-boards/${id}`, {})
      saveToken(res);
      alert("성공하였습니다.")
      window.location.reload();
    } catch (e) {
      alert(e)
    }

  },
  closeBoard: async (e) => {
    try {
      const { id } = e.target;
      const res = await authInstance.delete(`/boards/${id}`)
      saveToken(res);
      alert("성공하였습니다.")
      window.location.reload();
    } catch (e) {
      alert(e)
    }
  },
  getPostingReport: async (currentPage) => {
    try {
      const res = await authInstance.get(`/report-postings?page=${currentPage}&size=10`)
      saveToken(res);
      return res.data;
    } catch (e) {
      return e;
    }
  },
  getCommentReport: async (currentPage) => {
    try {
      const res = await authInstance.get(`/report-comments?page=${currentPage}&size=10`)
      saveToken(res);
      return res.data;
    } catch (e) {
      return e;
    }
  },
  confirmPostingReport: async (e) => {
    const { id } = e.target;
    try {
      const res = await authInstance.put(`/report-postings/${id}`)
      saveToken(res);
      alert("성공하였습니다.")
      window.location.reload();
    } catch (e) {
      alert(e)
    }
  },
  confirmCommentReport: async (e) => {
    const { id } = e.target;
    try {
      const res = await authInstance.put(`/report-comments/${id}`)
      saveToken(res);
      alert("성공하였습니다.")
      window.location.reload();
    } catch (e) {
      alert(e)
    }
  }
};

export default Api;
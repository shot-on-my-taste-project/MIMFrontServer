import axios from 'axios';
import saveToken, { defaultInstance, authInstance } from '../api/AxiosInstance';
import { getCookie, setCookie, removeCookie } from '../Cookie';

const Api = {
  onClickLogin: async (data) => {
    try {
      const res = await defaultInstance.post('/login', data)
      localStorage.setItem("refresh-token", res.headers['x-refresh-token']);
      setCookie("access-token", res.headers['x-access-token']);
      setCookie("user-id", data.id);
      document.location.href = "/";
    } catch (e) {
      alert("아이디 혹은 비밀번호가 다릅니다.")
      var pwInput = document.getElementById("pw")
      pwInput.value = null
      pwInput.focus();
    }
  },

  duplicateId: async (inputId) => {
    var idInput = document.getElementById("id");
    try {
      const res = await defaultInstance.get('/users/id/' + inputId)
      if (res.data) {
        alert("중복된 아이디입니다.")
        idInput.value = null;
        idInput.focus();
      } else {
        alert("사용 가능한 아이디입니다.")
      }
    } catch (e) {

    }
  },

  duplicateNickname: async (inputNickName) => {
    var nickNameInput = document.getElementById("nickName");
    try {
      const res = await defaultInstance.get('/users/nick-name/' + inputNickName)
      if (res.data) {
        alert("중복된 닉네임입니다.")
        nickNameInput.value = null;
        nickNameInput.focus();
      } else {
        alert("사용 가능한 닉네임입니다.")
      }
    } catch (e) {

    }
  },

  onClickSignUp: async (data) => {
    try {
      const res = await defaultInstance.post('/sign-up', data)
      if (res.data === "success") {
        document.location.href = "/login";
      }
    } catch (e) {

    }
  },

  uploadProfile: async(formData) => {
    try {
      const res = await authInstance.post(`/users/${getCookie('user-id')}/profile`, formData)
      saveToken(res);
      console.log(res)
    } catch(e) {

    }
  },

  updateMember: async (data) => {
    console.log(data);
    try {
      const res = await authInstance.put(`/users/${getCookie('user-id')}`, {
        "id": getCookie('user-id'),
        "nickName": data.nickName,
        "profilePath": data.profilePath,
        "pw": data.pw
      }
      )
      saveToken(res);
      window.location.href = "/mypage"
    } catch (e) {

    }
  },

  leaveMember: async () => {
    if (!window.confirm("탈퇴하시겠습니까?")) {
      alert("탈퇴를 취소하였습니다.")
    } else {
      try {
        const res = await authInstance.delete(`/users/${getCookie('user-id')}`)
        removeCookie('access-token')
        removeCookie('user-id')
        localStorage.removeItem('refresh-token')
        alert("탈퇴되었습니다.")
        document.location.href = "/";
      } catch(e) {

      }
    }
  },

  getUserInfo: async () => {
    try {
      const res = await authInstance.get(`/users/${getCookie('user-id')}`)
      saveToken(res);
      return res.status === 200 ? res.data : "error"
    } catch (e) {
      return e
    }
  },

  getUserWrittenPost: async (currentPage, size) => {
    try {
      const res = await authInstance.get(`/postings/user/${getCookie('user-id')}?page=${currentPage}&size=${size}`)
      saveToken(res);
      return res.data['content']
    } catch (e) {
      return e
    }
  },

  getUserProfile: async () => {
    try {
      const res = await authInstance.get(`/users/${getCookie('user-id')}/profile`)
      saveToken(res);
      return res.data
    } catch (e) {
      return e
    }
  },

  getFavoriteMovie: async(currentPage, size) => {
    try {
      const res = await authInstance.get(`favorite-movies/user/${getCookie('user-id')}?page=${currentPage}&size=${size}`)
      saveToken(res);
      return res.data['content']
    } catch(e) {
      return e
    }
  }
};

export default Api;
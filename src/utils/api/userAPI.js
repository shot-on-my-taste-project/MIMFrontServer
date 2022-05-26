import axios from 'axios';
import { getCookie, setCookie, removeCookie } from '../Cookie';
const Api = {

 onClickLogin :  async (data) => {
    axios.post('/login', {
                "id": data.id,
                "pw": data.pw
              })
              .then(res => {
                  if(res.data === "success") {
                    localStorage.setItem("refresh-token", res.headers['x-refresh-token']);
                    setCookie("access-token", res.headers['x-access-token']);
                    setCookie("user-id", data.id);
                    document.location.href="/";
                  }
              })
              .catch(err => {
                alert("아이디 혹은 비밀번호가 다릅니다.")
                var pwInput = document.getElementById("pw")
                pwInput.value = null
                pwInput.focus();
              });
},

 duplicateId : async (inputId) => {
    var idInput = document.getElementById("id");

    axios.get('/users/id/' + inputId)
      .then(res => {
          if(res.data){
            alert("중복된 아이디입니다.")
            idInput.value = null;
            idInput.focus();
          } else {
            alert("사용 가능한 아이디입니다.")
          }
            
      })
      .catch(err => {

      })
},

  duplicateNickname : async (inputNickName) => {
    var nickNameInput = document.getElementById("nickName");
    console.log(nickNameInput)
    axios.get('/users/nick-name/' + inputNickName)
    .then(res => {
        if(res.data){
          alert("중복된 닉네임입니다.")
          nickNameInput.value = null;
          nickNameInput.focus();
        } else {
          alert("사용 가능한 닉네임입니다.")
        }
    })
    .catch(err => {
      console.log(err)
    })
},

  onClickSignUp : async (data) => {
    axios.post('/sign-up', {
                "id": data.id,
                "pw": data.pw,
                "nickName": data.nickName,
              })
              .then(res => {
                  if(res.data === "success") {
                      document.location.href="/login";
                  }
              })
              .catch(err => {

              })
},

  updateMember : async (data) => {
    console.log(data);
    axios({
        url: '/users/' + `${getCookie('user-id')}`,
        method: 'put',
        headers: {
            "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
            "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
        },
        data: {
            "id": getCookie('user-id'),
            "nickName": data.nickName, 
            "profilePath": data.profilePath,
            "pw": data.pw
        }
    })
    .then(res => {
        document.location.href="/mypage"
    })
    .catch(err => {
        console.log(err);
    })
},

  leaveMember : async () => {
    if(!window.confirm("탈퇴하시겠습니까?")) {
        alert("탈퇴를 취소하였습니다.")
    } else {
        axios({
            url: '/users/' + `${getCookie('user-id')}`,
            method: 'delete',
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
            }
        })
        removeCookie('access-token')
        removeCookie('user-id')
        localStorage.removeItem('refresh-token')
        alert("탈퇴되었습니다.")
        document.location.href="/";
        
    }
},

  getUserInfo : async () => {
    try {
        const res = await axios({
            url: '/users/' + `${getCookie('user-id')}`,
            method: 'get',
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem('refresh-token')
            }
        })
        return res.status === 200 ? res.data : "error"
    } catch(e) {
        return e
    }
},

  getUserWrittenPost : async () => {
      try {
        const res = axios({
            url: '/postings/user/' + `${getCookie('user-id')}` + '?page=0',
            method: 'get',
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem('refresh-token')
            }
        })
        return res.status === 200 ? res.data : "error"
      } catch(e) {
          return e
      }
    }
};

export default Api;
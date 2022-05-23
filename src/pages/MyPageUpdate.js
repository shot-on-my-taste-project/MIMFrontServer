import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import profileImg from "../assets/profile.jpg"
import '../styles/MyPage.css'
import { getCookie } from '../utils/Cookie';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const MyPageUpdate = () => {
    const [inputNickName, setInputNickName] = useState('')
    let [inputOriginPw, setInputOriginPw] = useState('')
    let [inputNewPw, setInputNewPw] = useState('')
    const [inputProfilePath, setProfilePath] = useState('')
    
    const handleInputNickName = (e) => {
        setInputNickName(e.target.value)
    }
    
    const handleInputOriginPw = (e) => {
        setInputOriginPw(e.target.value)
    }

    const handleInputNewPw = (e) => {
        setInputNewPw(e.target.value)
    }

    const handleInputProfilePath = (e) => {
        setProfilePath(e.target.value)
    }

    const duplicateNickname = () => {
        var nickNameInput = document.getElementById("nickName");
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

          })
    }


    const samePassword = () => {
        var firstInput = document.getElementById("first-pw");
        var secondInput = document.getElementById("second-pw");
        
        if(firstInput.value === secondInput.value) {
            alert("비밀번호가 일치합니다.")
        } else {
            alert("비밀번호가 일치하지 않습니다.")
            secondInput.value = null
            secondInput.focus();
        }
    }

    const updateMember = () => {
        axios({
            url: '/login',
            method: 'post',
            data: {
                id: getCookie('user-id'),
                pw: CryptoJS.SHA256(inputOriginPw).toString()
            }
        })
        .then(res => {
            console.log("기존로그인:" + res.data)
            console.log(getCookie('user-id') + ', ' + inputNickName + ', ' + inputProfilePath, ', ' + inputNewPw)
            if(res.data === "success") {
                axios({
                    url: '/users/' + `${getCookie('user-id')}`,
                    method: 'put',
                    headers: {
                        "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                        "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
                    },
                    data: {
                        "id": getCookie('user-id'),
                        "nickName": inputNickName, 
                        "profilePath": inputProfilePath,
                        "pw": CryptoJS.SHA256(inputNewPw).toString()
                    }
                })
                .then(res => {
                    console.log(res);
                })
            }
        })
        .catch(err => {
            var originPw = document.getElementById('origin-pw');
            alert("기존 비밀번호가 일치하지 않습니다.")
            originPw.value = null;
            originPw.focus();
        })
        
    }

    const leaveMember = () => {
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
            alert("탈퇴되었습니다.")
        }
    }

    const goBack = () => {
        window.location.href="/mypage";
    }

    return ( 
        <div className="MyPageArea">
            <Header></Header>
            <div className="MainInfoUpdate">
                <div className="profileArea">
                    <img src={ profileImg } width={ "150rem" }/>
                    <div className="Filebox">
                                <label for="ex_file">업로드</label>
                                <input class="userInfo" type="file" id="ex_file" placeholder=""/>
                            </div>
                </div>

                <input type="text" placeholder="닉네임" onChange={handleInputNickName}/>
                <Button id="duplicate-check" variant="secondary" onClick={ duplicateNickname }>중복확인</Button>
            </div>

            <div className="InputWrapper">
            <table>
                    <tr>
                        <th colspan="1">기존 비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="origin-pw" placeholder="기존 비밀번호" onChange={handleInputOriginPw}/>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">새 비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="first-pw" placeholder="새 비밀번호" onChange={handleInputNewPw}/>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">새 비밀번호<br/>재입력</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="second-pw" placeholder="새 비밀번호 재입력"/>
                            <Button id="same-check" variant="secondary" size="sm" onClick={samePassword} className="subBtn">일치<br/>확인</Button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button variant="danger" onClick={ updateMember }>수정</Button>
                <Button variant="secondary" onClick={ leaveMember }>탈퇴</Button>
                <Button variant="secondary" onClick={ goBack }>취소</Button>
            </div>
        </div>
    );
};

export default MyPageUpdate;
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {Button, Table} from "react-bootstrap";
import '../styles/SignUp.css'
import Header from '../component/Header';
import Logo from '../component/Logo';
import Popup from '../component/Popup';


const SignUp = () => {
    const [inputId, setInputId] = useState('')
    let [inputPw, setInputPw] = useState('')
    const [inputNickName, setInputNickName] = useState('')
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const saltRounds = 10;

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const handleInputNickName = (e) => {
        setInputNickName(e.target.value)
    } 

    const onClickSignUp = () => {
        axios.post('/sign-up', {
                    "id": inputId,
                    "pw": CryptoJS.SHA256(inputPw).toString(),
                    "nickName": inputNickName,
                  })
                  .then(res => {
                      if(res.data === "success") {
                          document.location.href="/login";
                      }
                  })
                  .catch(err => {

                  })
    }

    const duplicateId = () => {

    }

    const duplicateNickname = () => {
        
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

    return (
        <div className="SignUpArea">
            <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
            <Header></Header>
            <Logo></Logo>
            <div className="UserInfoArea">
                <table>
                    <tr>
                        <th colspan="1">아이디</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="아이디" name="id" value={inputId} onChange={handleInputId}/>
                            <Button variant="secondary" size="sm" className="subBtn" onClick={duplicateId}>중복<br/>확인</Button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" placeholder="비밀번호" id="first-pw" name="pw" value={inputPw} onChange={handleInputPw}/>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1"></th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="second-pw" placeholder="비밀번호 재입력"/>
                            <Button variant="secondary" size="sm" className="subBtn" onClick={samePassword}>일치<br/>확인</Button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">닉네임</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="닉네임" name="nickName" value={inputNickName} onChange={handleInputNickName}/>
                            <Button variant="secondary" size="sm" className="subBtn" onClick={duplicateNickname}>중복<br/>확인</Button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">프로필 사진</th>
                        <td colspan="1">
                            <input class="userInfo" type="file" placeholder=""/>
                        </td>
                    </tr>
                </table>
                <Button variant="danger" id="signup-btn" onClick={onClickSignUp}>SIGN UP</Button>
            </div>
            
        </div>
    );
};

export default SignUp;
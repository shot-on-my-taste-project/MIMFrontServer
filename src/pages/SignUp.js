import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import {Button, Table} from "react-bootstrap";
import '../styles/SignUp.css'
import Header from '../component/Header';
import Logo from '../component/Logo';
const SignUp = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [inputNickName, setInputNickName] = useState('')

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
            "pw": inputPw,
            "isRemoved": false,
            "nickname": inputNickName,
            "profilePath": "",
            "role": "USER"
          })
          .then(res => console.log(res))
          .catch();
          console.log("click signup")
    }

    return (
        <div className="SignUpArea">
            <Header></Header>
            <Logo></Logo>
            <div className="UserInfoArea">
                <table>
                    <tr>
                        <th colspan="1">아이디</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="아이디" name="id" value={inputId} onChange={handleInputId}/>
                            <Button variant="secondary" size="sm" className="subBtn">중복<br/>확인</Button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" placeholder="비밀번호" name="pw" value={inputPw} onChange={handleInputPw}/>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1"></th>
                        <td colspan="1">
                            <input class="userInfo" type="password" placeholder="비밀번호 재입력"/>
                            <Button variant="secondary" size="sm" className="subBtn">일치<br/>확인</Button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">닉네임</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="닉네임" name="nickName" value={inputNickName} onChange={handleInputNickName}/>
                            <Button variant="secondary" size="sm" className="subBtn">중복<br/>확인</Button>
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
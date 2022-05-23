import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import Header from '../component/Header';
import Logo from '../component/Logo';
import '../styles/Login.css'
import CryptoJS from 'crypto-js';
import { setCookie } from '../utils/Cookie';

const Login = () => {
    const [inputId, setInputId] = useState('')
    let [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        axios.post('/login', {
                    "id": inputId,
                    "pw": CryptoJS.SHA256(inputPw).toString()
                  })
                  .then(res => {
                      if(res.data === "success") {
                        localStorage.setItem("refresh-token", res.headers['x-refresh-token']);
                        console.log(localStorage.getItem("refresh-token"));
                        setCookie("access-token", res.headers['x-access-token']);
                        setCookie("user-id", inputId);
                        document.location.href="/";
                      }
                  })
                  .catch(err => {
                    alert("아이디 혹은 비밀번호가 다릅니다.")
                    var pwInput = document.getElementById("pw")
                    pwInput.value = null
                    pwInput.focus();
                  });
    }

    return (
        <div className="LoginTotalArea">
            <Header></Header>
            <Logo></Logo>
            <div className="LoginWrapper">
                <div className="LoginArea">
                    <div className="InputArea">
                        <input type="text" placeholder=" ID" id="id" name="id" value={inputId} onChange={handleInputId}></input>
                        <input type="password" placeholder=" PW" id="pw" name="pw" value={inputPw} onChange={handleInputPw}></input>
                    </div>
                    <Button variant="danger" id="login-btn" onClick={onClickLogin}>로그인</Button>
                </div>
                <ul className="OptionArea">
                    <li><Link style={{textDecoration: 'none', color: 'white'}} id="signup-btn" to="/signup">회원가입</Link></li>
                    <li><Link style={{textDecoration: 'none', color: 'white'}} id="find-btn" to="/">ID/PW 찾기</Link></li>
                </ul>
                
            </div>
        </div>
    );
};

export default Login;
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import { SignUp } from '.';
import Header from '../component/Header';
import Logo from '../component/Logo';
import '../styles/Login.css'
const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const onClickLogin = () => {
        axios.post('/login', {
            "id": inputId,
            "pw": inputPw,
            "isRemoved": false,
            "nickname": "",
            "profilePath": "",
            "role": "USER"
          })
          .then(res => console.log(res))
          .catch();
          console.log("click login")
    }
    
    return (
        <div className="LoginTotalArea">
            <Header></Header>
            <Logo></Logo>
            <div className="LoginWrapper">
                <div className="LoginArea">
                    <div className="InputArea">
                        <input type="text" placeholder=" ID" name="id" value={inputId} onChange={handleInputId}></input>
                        <input type="password" placeholder=" PW" name="pw" value={inputPw} onChange={handleInputPw}></input>
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
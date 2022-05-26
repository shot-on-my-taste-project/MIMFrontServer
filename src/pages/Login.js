import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
import Header from '../component/Header';
import Logo from '../component/Logo';
import '../styles/Login.css'
import CryptoJS from 'crypto-js';
import Api from "../utils/api/userAPI"

const Login = () => {
    const [inputId, setInputId] = useState('')
    let [inputPw, setInputPw] = useState('')

    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    const loginData = {
        "id": inputId,
        "pw": CryptoJS.SHA256(inputPw).toString()
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
                    <Button variant="danger" id="login-btn" onClick={Api.onClickLogin.bind(this, loginData)}>로그인</Button>
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
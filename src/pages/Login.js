import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { SignUp } from '.';
import Header from '../component/Header';
import Logo from '../component/Logo';
import '../styles/Home.css'
import '../styles/Login.css'
const Login = () => {
    return (
        <div>
            <Header></Header>
            <Logo></Logo>
            <div className="LoginWrapper">
                <div className="LoginArea">
                    <div className="InputArea">
                        <input type="text" placeholder=" ID"></input>
                        <input type="text" placeholder=" PW"></input>
                    </div>
                    <button id="login-btn">로그인</button>
                </div>
                <div className="OptionArea">
                    <Link to="/signup">회원가입</Link>
                    <Link to="/">ID/PW 찾기</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
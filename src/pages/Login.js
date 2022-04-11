import React, { Component, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import {Button} from "react-bootstrap";
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
                        <input type="password" placeholder=" PW"></input>
                    </div>
                    <Button variant="danger" id="login-btn">로그인</Button>
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
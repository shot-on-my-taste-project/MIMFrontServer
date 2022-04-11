import React, { Component } from 'react'
import {Button, Table} from "react-bootstrap";
import '../styles/SignUp.css'
import Header from '../component/Header';
import Logo from '../component/Logo';
const SignUp = () => {
    return (
        <div className="SignUpArea">
            <Header></Header>
            <Logo></Logo>
            <div className="UserInfoArea">
                <table>
                    <tr>
                        <th colspan="1">아이디</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="아이디"/>
                            <Button variant="secondary" size="sm" className="subBtn">중복<br/>확인</Button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" placeholder="비밀번호"/>
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
                            <input class="userInfo" type="text" placeholder="닉네임"/>
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
                <Button variant="danger" id="signup-btn">SIGN UP</Button>
            </div>
            
        </div>
    );
};

export default SignUp;
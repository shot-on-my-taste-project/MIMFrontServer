import React, { Component } from 'react'
import '../styles/Home.css'
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
                            <input type="text" placeholder="아이디"/>
                            <button>중복확인</button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">비밀번호</th>
                        <td colspan="1">
                            <input type="password" placeholder="비밀번호"/>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1"></th>
                        <td colspan="1">
                            <input type="password" placeholder="비밀번호 재입력"/>
                            <button>일치확인</button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">닉네임</th>
                        <td colspan="1">
                            <input type="text" placeholder="닉네임"/>
                            <button>중복확인</button>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">프로필 사진</th>
                        <td colspan="1">
                            <input type="file" placeholder=""/>
                        </td>
                    </tr>
                </table>
                <button id="signup-btn">SIGN UP</button>
            </div>
            
        </div>
    );
};

export default SignUp;
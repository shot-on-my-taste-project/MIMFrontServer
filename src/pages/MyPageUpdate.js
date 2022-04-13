import React from 'react'
import { Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import profileImg from "../assets/profile.jpg"
import '../styles/MyPage.css'

const MyPageUpdate = () => {
    return ( 
        <div className="MyPageArea">
            <Header></Header>
            <div className="MainInfoUpdate">
                <img src={ profileImg } width={ "150rem" }/>
                <input type="text"/>
                <Button id="duplicate-check" variant="secondary">중복확인</Button>
            </div>

            <div className="InputWrapper">
            <table>
                    <tr>
                        <th colspan="1">기존 비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="기존 비밀번호"/>                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">새 비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" placeholder="새 비밀번호"/>
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">새 비밀번호<br/>재입력</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" placeholder="새 비밀번호 재입력"/>
                            <Button id="same-check" variant="secondary" size="sm" className="subBtn">일치<br/>확인</Button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button variant="danger">수정</Button>
                <Button variant="secondary">탈퇴</Button>
                <Button variant="secondary">취소</Button>
            </div>
        </div>
    );
};

export default MyPageUpdate;
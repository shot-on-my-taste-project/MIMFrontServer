import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { Button } from "react-bootstrap";
import '../styles/SignUp.css'
import Header from '../component/Header';
import Logo from '../component/Logo';
// import { duplicateId, duplicateNickname, onClickSignUp } from '../utils/api/userAPI';
import Api from "../utils/api/userAPI";

const SignUp = () => {
    const [inputId, setInputId] = useState('')
    let [inputPw, setInputPw] = useState('')
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

    const userSignUpData = {
        "id": inputId,
        "pw": CryptoJS.SHA256(inputPw).toString(),
        "nickName": inputNickName,
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
            <Header></Header>
            <Logo></Logo>
            <div className="UserInfoArea">
                <table>
                    <tr>
                        <th colspan="1">아이디</th>
                        <td colspan="1">
                            <input class="userInfo" type="text" placeholder="아이디" id="id" name="id" value={inputId} onChange={handleInputId}/>
                            <Button variant="secondary" size="sm" className="subBtn" onClick={Api.duplicateId.bind(this, inputId)}>중복<br/>확인</Button>
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
                            <input class="userInfo" type="text" placeholder="닉네임" id="nickName" name="nickName" value={inputNickName} onChange={handleInputNickName}/>
                            <Button variant="secondary" size="sm" className="subBtn" onClick={ Api.duplicateNickname.bind(this, inputNickName) }>중복<br/>확인</Button>
                        </td>
                    </tr>
                </table>
                <Button variant="danger" id="signup-btn" onClick={Api.onClickSignUp.bind(this, userSignUpData)}>SIGN UP</Button>
            </div>
            
        </div>
    );
};

export default SignUp;
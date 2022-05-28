import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Header from '../component/Header';
import profileImg from "../assets/profile.jpg"
import CryptoJS from 'crypto-js';
// import { duplicateNickname, updateMember, leaveMember } from '../utils/api/userAPI';
import Api from "../utils/api/userAPI"
import '../styles/MyPage.css'

const MyPageUpdate = () => {
    const [inputNickName, setInputNickName] = useState('')
    let [inputOriginPw, setInputOriginPw] = useState('')
    let [inputNewPw, setInputNewPw] = useState('')
    const [inputProfilePath, setProfilePath] = useState('')
    const [userMypageData, setUserMyPageData] = useState({})

    const handleInputNickName = (e) => {
        setInputNickName(e.target.value)
        userMypageData.nickName = e.target.value
        console.log(userMypageData)
    }

    const handleInputOriginPw = (e) => {
        setInputOriginPw(e.target.value)
        setInputOriginPw(CryptoJS.SHA256(e.target.value).toString())
    }

    const handleInputNewPw = (e) => {
        setInputNewPw(e.target.value)
        const value = e.target.value
        if (value === '') {
            delete userMypageData.pw;
            console.log(userMypageData)
        }
        else {
            userMypageData.pw = CryptoJS.SHA256(e.target.value).toString()
            console.log(userMypageData)
        }
    }

    const handleInputProfilePath = (e) => {
        // setProfilePath(e.target.value)
    }

    const samePassword = () => {
        var firstInput = document.getElementById("first-pw");
        var secondInput = document.getElementById("second-pw");

        if (firstInput.value === secondInput.value) {
            alert("비밀번호가 일치합니다.")
        } else {
            alert("비밀번호가 일치하지 않습니다.")
            secondInput.value = null
            secondInput.focus();
        }
    }

    const goBack = () => {
        window.location.href = "/mypage";
    }

    return (
        <div className="MyPageArea">
            <Header></Header>
            <div className="MainInfoUpdate">
                <div className="profileArea">
                    <img src={profileImg} width={"150rem"} />
                    <div className="Filebox">
                        <label for="ex_file">업로드</label>
                        <input class="userInfo" type="file" id="ex_file" placeholder="" />
                    </div>
                </div>

                <input type="text" placeholder="닉네임" onChange={handleInputNickName} />
                <Button id="duplicate-check" variant="secondary" onClick={Api.duplicateNickname.bind(this, inputNickName)}>중복확인</Button>
            </div>

            <div className="InputWrapper">
                <table>
                    <tr>
                        <th colspan="1">기존 비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="origin-pw" placeholder="기존 비밀번호" onChange={handleInputOriginPw} />
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">새 비밀번호</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="first-pw" placeholder="새 비밀번호" onChange={handleInputNewPw} />
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">새 비밀번호<br />재입력</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="second-pw" placeholder="새 비밀번호 재입력" />
                            <Button id="same-check" variant="secondary" size="sm" onClick={samePassword} className="subBtn">일치<br />확인</Button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button variant="danger" onClick={Api.updateMember.bind(this, userMypageData)}>수정</Button>
                <Button variant="secondary" onClick={Api.leaveMember}>탈퇴</Button>
                <Button variant="secondary" onClick={goBack}>취소</Button>
            </div>
        </div>
    );
};

export default MyPageUpdate;
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Header from '../component/Header';
import profileImgInput from "../assets/profile.jpg"
import CryptoJS from 'crypto-js';
import Api from "../utils/api/userAPI"
import { getCookie } from '../utils/Cookie';
import '../styles/MyPage.css'

const MyPageUpdate = () => {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [inputNickName, setInputNickName] = useState('')
    let [inputOriginPw, setInputOriginPw] = useState('')
    let [inputNewPw, setInputNewPw] = useState('')
    const [inputProfilePath, setProfilePath] = useState('')
    const [userMypageData, setUserMyPageData] = useState({})

    const userfun = Api.getUserInfo;

    const getInfo = async () => {
        setUser(await userfun().then((x) => {
            setProfile(`http://fhdufhdu.iptime.org:8081/users/${x.id}/profile`);
            return x;
        }));
    }

    const handleInputNickName = (e) => {
        setInputNickName(e.target.value)
        userMypageData.nickName = e.target.value
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
        }
        else {
            userMypageData.pw = CryptoJS.SHA256(e.target.value).toString()
        }
    }
    
    const onImgChange = async(e) => {
        const formData = new FormData()
        formData.append('profile', e.target.files[0])
        const res = await Api.uploadProfile(formData)
        document.getElementById('profile-img').src = await userfun().then((x) => {
            return `http://fhdufhdu.iptime.org:8081/users/${x.id}/profile`;
        }) 
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

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className="MyPageArea">
            <Header></Header>
            <div className="MainInfoUpdate">
                <div className="profileArea">
                    <img id="profile-img" src={ profile } width={"150rem"} />
                    <div className="Filebox">
                        <label for="ex_file">업로드</label>
                        <input class="userInfo" type="file" id="ex_file" accept="image/*" onChange={onImgChange} />
                        {/* <Button onClick={onImgUploadBtnClick}>업로드</Button> */}
                    </div>
                </div>

                <input type="text" placeholder={user.nickName} onChange={handleInputNickName} />
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
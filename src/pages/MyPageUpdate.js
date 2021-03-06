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
            alert("??????????????? ???????????????.")
        } else {
            alert("??????????????? ???????????? ????????????.")
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
                        <label for="ex_file">?????????</label>
                        <input class="userInfo" type="file" id="ex_file" accept="image/*" onChange={onImgChange} />
                        {/* <Button onClick={onImgUploadBtnClick}>?????????</Button> */}
                    </div>
                </div>

                <input type="text" placeholder={user.nickName} onChange={handleInputNickName} />
                <Button id="duplicate-check" variant="secondary" onClick={Api.duplicateNickname.bind(this, inputNickName)}>????????????</Button>
            </div>

            <div className="InputWrapper">
                <table>
                    <tr>
                        <th colspan="1">?????? ????????????</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="origin-pw" placeholder="?????? ????????????" onChange={handleInputOriginPw} />
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">??? ????????????</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="first-pw" placeholder="??? ????????????" onChange={handleInputNewPw} />
                        </td>
                    </tr>
                    <tr>
                        <th colspan="1">??? ????????????<br />?????????</th>
                        <td colspan="1">
                            <input class="userInfo" type="password" id="second-pw" placeholder="??? ???????????? ?????????" />
                            <Button id="same-check" variant="secondary" size="sm" onClick={samePassword} className="subBtn">??????<br />??????</Button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button variant="danger" onClick={Api.updateMember.bind(this, userMypageData)}>??????</Button>
                <Button variant="secondary" onClick={Api.leaveMember}>??????</Button>
                <Button variant="secondary" onClick={goBack}>??????</Button>
            </div>
        </div>
    );
};

export default MyPageUpdate;
import React, { Component } from 'react';
import SideBar from "./SideBar";
import MemberImg from "../assets/member.png"
import { Link } from 'react-router-dom';
import { getCookie } from '../utils/Cookie';
import axios from 'axios';

class Header extends Component {
    render() {
        //포스터 url 가져오기
        const getPoster = (userId) => `http://fhdufhdu.iptime.org:8081/users/${userId}/profile`;
        if(getCookie("access-token") != null) {
            return (
                <div className="TopBar">
                    <SideBar></SideBar>
                    <Link to="/mypage">
                        <img id="member" src={ getPoster(getCookie('user-id')) } width={"40px"} height={"40px"}/>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="TopBar">
                    <SideBar></SideBar>
                    <Link to="/login">
                        <img id="member" src={ MemberImg } width={"40px"} height={"40px"}/>
                    </Link>
                </div>
            );
        }
    };
}

export default Header;
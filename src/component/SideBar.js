import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import * as Home from '../services/home.js'
import { getCookie, removeCookie } from '../utils/Cookie';


class SideBar extends Component {
    render() {
        const logout = () => {
            removeCookie("access-token")
            window.location.href="/"
        }

        if(getCookie("access-token") != null) {
            return (
                <div className="SideBar">
                <div id="sidenav">
                    <a id="closebtn" href="javascript:void(0)" onClick={ Home.closeNav }>&times;</a>
                    {getCookie('user-id')} <Button variant="danger" onClick={ logout }>로그아웃</Button>
                    <Link to="/" >홈</Link>
                    <Link to="/community/main" >작품별 게시판</Link>
                    <Link to="/community/free" >통합 자유 게시판</Link>
                </div>
                <span onClick={ Home.openNav }>&#9776;</span><span id="semi-logo" onClick={ Home.goHome }> MIM</span>
            </div>
            );
        }
        else {
            return (
            <div className="SideBar">
                <div id="sidenav">
                    <a id="closebtn" href="javascript:void(0)" onClick={ Home.closeNav }>&times;</a>
                    <Link to="/login">로그인</Link>
                    <Link to="/" >홈</Link>
                    <Link to="/community/main" >작품별 게시판</Link>
                    <Link to="/community/free" >통합 자유 게시판</Link>
                </div>
                <span onClick={ Home.openNav }>&#9776;</span><span id="semi-logo" onClick={ Home.goHome }> MIM</span>
            </div>
            );
        }
    }
}

export default SideBar;
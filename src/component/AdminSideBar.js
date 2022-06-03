import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import * as Home from '../services/home.js'
import { getCookie, removeCookie } from '../utils/Cookie';
import { Button } from 'react-bootstrap'

class AdminSideBar extends Component {
    render() {
        const logout = () => {
            removeCookie("access-token")
            removeCookie("user-id")
            localStorage.removeItem("refresh-token")
            window.location.href = "/"
        }

        if (getCookie("access-token") != null) {
            return (
                <div className="SideBar">
                    <div id="sidenav">
                        <a id="closebtn" href="javascript:void(0)" onClick={Home.closeNav}>&times;</a>
                        <div className="userInfoSideBar">
                            {getCookie('user-id')} <Button variant="danger" onClick={logout}>로그아웃</Button>
                        </div>
                        <Link to="/admin/board" >게시판 관리</Link>
                        <Link to="/admin/report" >신고 관리</Link>
                    </div>
                    <span onClick={Home.openNav}>&#9776;</span><span id="semi-logo" onClick={Home.goHome}> MIM</span>
                </div>
            );
        }
        else {
            return (
                <div className="SideBar">
                    <div id="sidenav">
                        <a id="closebtn" href="javascript:void(0)" onClick={Home.closeNav}>&times;</a>
                        <Link to="/login">로그인</Link>
                        <Link to="/admin/board" >게시판 관리</Link>
                        <Link to="/admin/report" >신고 관리</Link>
                    </div>
                    <span onClick={Home.openNav}>&#9776;</span><span id="semi-logo" onClick={Home.goHome}> MIM</span>
                </div>
            );
        }
    }
}

export default AdminSideBar;
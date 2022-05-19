import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import * as Home from '../services/home.js'

class AdminSideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                <div id="sidenav">
                    <a id="closebtn" href="javascript:void(0)" onClick={ Home.closeNav }>&times;</a>
                    <Link to="/login">로그인</Link>
                    <Link to="/" >홈</Link>
                    <Link to="/admin/board" >게시판 관리</Link>
                    <Link to="/admin/report" >신고 관리</Link>
                    <Link to="/admin/movie" >영화 관리</Link>
                </div>
                <span onClick={ Home.openNav }>&#9776;</span><span id="semi-logo" onClick={ Home.goHome }> MIM</span>
            </div>
        );
    }
}

export default AdminSideBar;
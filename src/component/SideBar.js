import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import * as Home from '../services/home.js'

class SideBar extends Component {
    render() {
        return (
            <div className="SideBar">
                <div id="sidenav">
                    <a id="closebtn" href="javascript:void(0)" onClick={ Home.closeNav }>&times;</a>
                    <Link to="/login">로그인</Link>
                    <Link to="/" >홈</Link>
                    <Link to="/board" >작품별 게시판</Link>
                    <Link to="/free" >통합 자유 게시판</Link>
                </div>
                <span onClick={ Home.openNav }>&#9776;</span><span id="semi-logo" onClick={ Home.goHome }> MIM</span>
            </div>
        );
    }
}

export default SideBar;
import React, { Component } from 'react';
import SideBar from "./SideBar";
import MemberImg from "../assets/member.png"
class Header extends Component {
    render() {
        return (
            <div className="TopBar">
                <SideBar></SideBar>
                <img id="member" src={ MemberImg } width={"40px"} height={"40px"}/>
            </div>
        );
    };
}

export default Header;
import React, { Component } from 'react';
import AdminSideBar from "./AdminSideBar";
import AdminImg from "../assets/admin.png"
import { Link } from 'react-router-dom';
class AdminHeader extends Component {
    render() {
        return (
            <div className="TopBar">
                <AdminSideBar></AdminSideBar>
                <Link to="/mypage">
                    <img id="admin" src={ AdminImg } width={"40px"} height={"40px"}/>
                </Link>
            </div>
        );
    };
}

export default AdminHeader;
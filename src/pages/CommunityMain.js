import React, { Component, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Header from '../component/Header'
import '../styles/Community.css'
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import CustomSearchArea from '../component/CustomSearchArea'
import UserBoardSearch from '../component/UserBoardSearch'
import Popup from '../component/Popup'
const CommunityMain = () => {
   
    const [ popupOpen, setPopupOpen ] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    }
    
    const closePopup = () => {
        setPopupOpen(false);
    }

    return (
        <div>
            <Header></Header>

            <div className="Title">
                <h1>인기 게시판 TOP 3</h1>
                <div>
                    <CustomSearchArea event={openPopup}/>
                    <Popup open={popupOpen} close={closePopup}>
                        <UserBoardSearch />
                        
                    </Popup>
                </div>
                
            </div>
            
            <div className="CommunitiesWrapper">
                <div className="Community">
                    <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/community/movie"><h3>타짜</h3></Link>
                    <h6>123명이 이야기 중</h6>
                </div>
                
                <div className="Community">
                    <img src={ ImgEx2 } width={"300rem"} height={"400rem"}/>
                    <h3>승리호</h3>
                    <h6>456명이 이야기 중</h6>
                </div>

                <div className="Community">
                    <img src={ ImgEx3 } width={"300rem"} height={"400rem"}/>
                    <h3>부산행</h3>
                    <h6>789명이 이야기 중</h6>
                </div>
            </div>
        </div>
    );
};

export default CommunityMain;
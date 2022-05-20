import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../component/Header';
import Thumb from "../assets/tazza-thumb.jpg"
import WriteBoard from '../component/WriteBoard';
import '../styles/Community.css'
const BoardWrite = () => {
    return (
        <div>
            <Header></Header>
            <img className="ThumbImg" src={ Thumb } width={"100%"} height={"50%"}/>
           
            <div className="BoardInfo">
                <div className="Text">
                  <h1>타짜</h1><h4>789명과 함께 이야기 중</h4>
                </div>
                <div className="Btn">
                  <Button>신고</Button><Button>즐겨찾기</Button>
                </div>
            </div>
            <WriteBoard></WriteBoard>
        </div>
    );
};

export default BoardWrite;
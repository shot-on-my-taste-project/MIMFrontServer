import React, { Component } from 'react'
import Header from '../component/Header';
import WriteBoard from '../component/WriteBoard';
import '../styles/Community.css'
const FreeBoardWrite = () => {
    return (
        <div>
            <Header></Header>
            <div className="FreeBoardThumb">
                <h1>자유 게시판</h1>
            </div>
            <WriteBoard></WriteBoard>
        </div>
    );
};

export default FreeBoardWrite;
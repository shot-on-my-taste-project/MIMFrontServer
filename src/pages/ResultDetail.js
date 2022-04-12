import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import ImgEx1 from "../assets/tazza.jpg"
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import '../styles/Result.css'
const ResultDetail = () => {
    return ( 
        <div className="ResultArea">
            <Header></Header>
            <div className="ContentWrapper">
                <div className="MovieInfo">
                    <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                    <div className="TextInfo">
                        <h1>타짜</h1>
                        <span>2006</span> | <span>청불</span> | <span>2시간 20분</span> | <span>스릴러</span>
                        <p>이토록 화려하고, 이토록 슬픈 꽃놀이를 보았는가. <br/>
                        속절없이 당한 도박 사기에 칼을 갈고 타짜로 거듭난 청년 고니. <br/>
                        전국의 화투판을 돌면서 목숨 건 승부를 시작한다.</p>
                        <p>주연: 조승우, 김혜수, 백윤식</p>
                    </div>
                </div>
                
                <div className="ShortCutCommunity">
                    <h2>이 영화를 더 즐기고 싶다면?</h2>
                    <div id="slate">
                    <img id="slate-open" src={ SlateImg1 } width={"80px"} height={"80px"}/>
                    <img id="slate-close" src={ SlateImg2 } width={"80px"} height={"70px"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultDetail;
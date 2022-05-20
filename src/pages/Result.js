import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import MainSearchSmall from '../component/MainSearchSmall';
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import '../styles/Result.css'
const Result = () => {
    return ( 
        <div className="ResultArea">
            <Header></Header>
            <div className="SearchArea">
                <MainSearchSmall></MainSearchSmall>
            </div>
            
            <div className="ResultsWrapper">
                <div className="Result">
                    <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/result/detail"><h3>타짜</h3></Link>
                </div>
                
                <div className="Result">
                    <img src={ ImgEx2 } width={"300rem"} height={"400rem"}/>
                    <h3>승리호</h3>
                </div>

                <div className="Result">
                    <img src={ ImgEx3 } width={"300rem"} height={"400rem"}/>
                    <h3>부산행</h3>
                </div>
            </div>
        </div>
    );
};

export default Result;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import CustomSearchArea from './CustomSearchArea'
import '../styles/Community.css'

class UserBoardSearch extends Component {
    render() {
        return (
        <div className="UserBoardSearch">
            <CustomSearchArea />
            <div className="SearchResultsWrapper">
                <div className="SearchResult">
                    <img src={ ImgEx1 } width={"100rem"} height={"133rem"}/>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/community/movie"><h3>타짜</h3></Link>
                    <h6>123명이 이야기 중</h6>
                </div>
                
                <div className="SearchResult">
                    <img src={ ImgEx2 } width={"100rem"} height={"133rem"}/>
                    <h3>승리호</h3>
                    <h6>456명이 이야기 중</h6>
                </div>

                <div className="SearchResult">
                    <img src={ ImgEx3 } width={"100rem"} height={"133rem"}/>
                    <h3>부산행</h3>
                    <h6>789명이 이야기 중</h6>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default UserBoardSearch;
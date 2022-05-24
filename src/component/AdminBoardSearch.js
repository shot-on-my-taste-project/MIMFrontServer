import Profile  from '../assets/profile.jpg'
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import CustomSearchArea from '../component/CustomSearchArea'
import '../styles/Admin.css'

class AdminBoardSearch extends Component {
    render() {
        return (
        <div className="AdminBoardSearch">
            <CustomSearchArea />
            <div className="AdminSearchResultsWrapper">
                <div className="AdminSearchResult">
                    <img src={ ImgEx1 } width={"100rem"} height={"133rem"}/>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/community/movie"><h3>타짜</h3></Link>
                    <h6>123명이<br />개설을 원해요</h6>
                    <Button variant="danger">게시판 개설</Button>
                </div>
                
                <div className="AdminSearchResult">
                    <img src={ ImgEx2 } width={"100rem"} height={"133rem"}/>
                    <h3>승리호</h3>
                    <h6>456명이<br />폐쇄를 원해요</h6>
                    <div className="SubButtonWrapper">
                      <Button variant="danger">폐쇄</Button>
                      <Button variant="secondary">사유</Button>
                    </div>
                </div>

                <div className="AdminSearchResult">
                    <img src={ ImgEx3 } width={"100rem"} height={"133rem"}/>
                    <h3>부산행</h3>
                    <h6>789명이 이야기 중</h6>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default AdminBoardSearch;
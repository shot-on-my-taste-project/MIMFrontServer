import React, { Component, useState, useEffect } from 'react'
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
import Api from "../utils/api/communityAPI"
import Api2 from "../utils/api/searchAPI"

const CommunityMain = () => {
   
    // 팝업 부분
    const [ popupOpen, setPopupOpen ] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    }
    
    const closePopup = () => {
        setPopupOpen(false);
    }

    //포스터 url 가져오기
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;
    const getCommunityLink = (movieId) => `/community/movie/${movieId}`;
    // 데이터 받아오기
    const [ boards, setBoards ] = useState([])
    const [ movies, setMovies ] = useState([])

    //게시판 요청에서 영화 아이디 추출
    const getIds = (list) => {
        let ids = '';
        list.forEach((x) => {
            ids += `${x.movieId},`
        })
        return ids;
    };

    const getInfo = async() => {
        setBoards(await Api.getAllBoard().then(async x => {
            setMovies(await Api.getMovies(getIds(x.content)))
            return x.content
        }))    
    }

    useEffect(async() => {
        getInfo();
    }, []);

    
    
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
                    {  movies.map((movie, index) => 
                        <div className="Community">
                        <img src={ getPoster(movie.id) } width={"300rem"} height={"400rem"}/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={getCommunityLink(movie.id)}><h3>{movie.title}</h3></Link>
                        <h6>{console.log(boards[index])}개의 게시글</h6>
                        </div>
                    )}
                </div>
            </div>
        );
};

export default CommunityMain;
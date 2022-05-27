import React, { Component, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import { getCookie, setCookie, removeCookie } from '../utils/Cookie';
import axios from 'axios';
import Api from '../utils/api/userAPI.js';

const AdminBoardClose = (props) => {
    const { boards, movies, closeBoard } = props;

    //포스터 url 가져오기
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;

    return (
        <div className="CloseBoard">
            <div className="BoardRequestWrapper">
                {boards.length == 0 || movies.length == 0 ||boards.length != movies.length? "결과 없음" : boards.map((board, idx) => (
                    <div className="Request">
                    <img src={ getPoster(movies[idx].id) } width={"300rem"} height={"400rem"}/>
                    <h3>{movies[idx].title}</h3>
                    <div className="ButtonWrapper">
                        <Button variant="danger" onClick={closeBoard} id={board.id}>폐쇄</Button>
                        {/* <Button variant="secondary">사유</Button> */}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default AdminBoardClose;
import React, { Component, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"

//포스터 url 가져오기
const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;

const AdminBoardOpen = (props) => {
    const { requestBoards, movies, makeBoard } = props;
    console.log(requestBoards)
    console.log(movies)
    return (
        <div className="OpenBoard">
            <div className="BoardRequestWrapper">
                {movies.length == 0 || requestBoards.length == 0 || movies.length != requestBoards.length ? "결과 없음" : requestBoards.map((request, index) => (
                    <div className="Request">
                        <img src={getPoster(movies[index].id)} width={"300rem"} height={"400rem"} />
                        <h3>{movies[index].title}</h3>
                        <span> 요청 횟수 : {requestBoards[index].requestCnt} </span>
                        <Button variant="danger" onClick={makeBoard} id={(requestBoards[index].id)}>게시판 개설</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminBoardOpen;
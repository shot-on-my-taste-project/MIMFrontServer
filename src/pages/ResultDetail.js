import React, { Component, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import ImgEx1 from "../assets/tazza.jpg"
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import '../styles/Result.css'
import axios from 'axios';
import { render } from 'react-dom';
const ResultDetail = ({ match }) => {
    const [ movieInfo, setMovieInfo ] = useState([]);
    axios.get('/movies/' + match.params.movieId)
    .then(res => {
        setMovieInfo(res.data);
    })
    .catch(err => {
        console.log(err)
    })

    console.log(movieInfo)

    return ( 
        <div className="ResultArea">
            <Header></Header>
            <div className="ContentWrapper">
                <div className="MovieInfo">
                    <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                    <div className="TextInfo">
                        <h1>{movieInfo.movieDto.title}</h1>
                        <span>{movieInfo.movieDto.year}</span> | <span>{movieInfo.rating}</span> | <span>{movieInfo.movieDto.runningTime}분</span> | <span>{movieInfo.genres}</span>
                        <p>{movieInfo.movieDto.synopsis}</p>
                        <p>감독: {movieInfo.directors}</p>
                        <p>주연: {movieInfo.actors}</p>
                    </div>
                </div>
                
                <div className="ShortCutCommunity">
                    <h2>이 영화를 더 즐기고 싶다면?</h2>
                    <Link to="/community/movie">
                    <div id="slate">
                    <img id="slate-open" src={ SlateImg1 } width={"80px"} height={"80px"}/>
                    <img id="slate-close" src={ SlateImg2 } width={"80px"} height={"70px"}/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResultDetail;
import React, { Component, useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import ImgEx1 from "../assets/tazza.jpg"
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import '../styles/Result.css'
import Api from "../utils/api/searchAPI"

const ResultDetail = ({ match }) => {
    const movieId = match.params.movieId;
    const linkToCommunity = '/community/movie/' + movieId;
    const [ movieInfo, setMovieInfo ] = useState(null);

    const movieInfoFetch = async () => {
        setMovieInfo(await Api.getResultDetail(movieId));
    }

    useEffect(() => {
        movieInfoFetch();
    }, []);

    if(movieInfo) {
        return ( 
            <div className="ResultArea">
                <Header></Header>
                <div className="ContentWrapper">
                    <div className="MovieInfo">
                        <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                        <div className="TextInfo">
                            <h1>{movieInfo.movieDto.title}</h1>
                            <span>{movieInfo.movieDto.year}</span> | <span>{movieInfo.rating}</span> | <span>{movieInfo.movieDto.runningTime}분</span> |
                            {movieInfo.genres.map((genre) => <span> {genre} </span>)}
    
                            <p>{movieInfo.movieDto.synopsis}</p>
                            <p>감독: {movieInfo.directors.map((director) => <span>{director} </span>)}</p>
                            <p>주연: {movieInfo.actors.map((actor) => <span>{actor} </span>)}</p>
                        </div>
                    </div>
                    
                    <div className="ShortCutCommunity">
                        <h2>이 영화를 더 즐기고 싶다면?</h2>
                        <Link to={ linkToCommunity }>
                        <div id="slate">
                        <img id="slate-open" src={ SlateImg1 } width={"80px"} height={"80px"}/>
                        <img id="slate-close" src={ SlateImg2 } width={"80px"} height={"70px"}/>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
};

export default ResultDetail;
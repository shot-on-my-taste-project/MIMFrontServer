import React, { Component, useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import ImgEx1 from "../assets/tazza.jpg"
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import '../styles/Result.css'
import Api from "../utils/api/searchAPI"
import Api2 from "../utils/api/communityAPI"

const ResultDetail = ({ match }) => {
    const movieId = match.params.movieId;
    const linkToCommunity = '/community/movie/' + movieId;

    const [ movieInfo, setMovieInfo ] = useState(null);
    const [ isExistBoard, setIsExistBoard] = useState(true);
    const [ requestCnt, setRequestCnt ] = useState(0);

    //포스터 url 가져오기
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;

    const movieInfoFetch = async () => {
        setMovieInfo(await Api.getResultDetail(movieId));
    }

    const isExistBoardFunc = async (movieId) => {
        await Api2.getBoard(movieId).then(x => {
            if(x === false) {
                setIsExistBoard(false)
                setRequestCnt()
            }
        })
    }

    const requestCommunity = async () => {
        await Api2.RequestBoard(movieId)
    }

    useEffect(() => {
        movieInfoFetch();
        isExistBoardFunc(movieId);
    }, []);

    if(movieInfo) {
        return ( 
            <div className="ResultArea">
                <Header></Header>
                <div className="ContentWrapper">
                    <div className="MovieInfo">
                        <img src={ getPoster(movieInfo.movieDto.id) } width={"300rem"} height={"400rem"}/>
                        <div className="TextInfo">
                            <h1>{movieInfo.movieDto.title}</h1>
                            <span>{movieInfo.movieDto.year}</span> | <span>{movieInfo.rating}</span> | <span>{movieInfo.movieDto.runningTime}</span> |
                            {movieInfo.genres.map((genre) => <span> {genre} </span>)}
    
                            <p>{movieInfo.movieDto.synopsis}</p>
                            <p>감독: {movieInfo.directors.map((director) => <span>{director} </span>)}</p>
                            <p>주연: {movieInfo.actors.map((actor) => <span>{actor} </span>)}</p>
                        </div>
                    </div>
                    
                    <div className="ShortCutCommunity">
                        { isExistBoard ?
                        <>
                            <div className="CommunityAlert">
                                <h2>이 영화를 더 즐기고 싶다면?</h2>
                                <h6>커뮤니티에서 이야기 나눠보기</h6>
                            </div>
                            <Link to={ linkToCommunity }>
                            <div id="slate">
                            <img id="slate-open" src={ SlateImg1 } width={"80px"} height={"80px"}/>
                            <img id="slate-close" src={ SlateImg2 } width={"80px"} height={"70px"}/>
                            </div>
                            </Link>
                        </>
                             :
                        <>
                            <div className="CommunityAlert">
                                <h2>앗 커뮤니티가 없어요!</h2>
                                <h6>커뮤니티 개설 요청하기</h6>
                            </div>
                            <Link onClick={ requestCommunity }>
                            <div id="slate">
                            <img id="slate-open" src={ SlateImg1 } width={"80px"} height={"80px"}/>
                            <img id="slate-close" src={ SlateImg2 } width={"80px"} height={"70px"}/>
                            </div>
                            </Link>
                        </>
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default ResultDetail;
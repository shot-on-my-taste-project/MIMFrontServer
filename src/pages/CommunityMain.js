import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
import '../styles/Community.css'
import CustomSearchArea from '../component/CustomSearchArea'
import Api from "../utils/api/communityAPI"
import Api2 from "../utils/api/searchAPI"
import queryString from "query-string"

const CommunityMain = ({location}) => {
   
    const query = queryString.parse(location.search)

    //포스터 url 가져오기
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;
    const getCommunityLink = (movieId) => `/community/movie/${movieId}`;
    const gotoMovieInfo = (movieId) => window.location.href = `/result/detail/${movieId}`
    // 데이터 받아오기
    const [ boards, setBoards ] = useState([])
    const [ movies, setMovies ] = useState([])
    const [ movieSearchResult, setMovieSearchResult ] = useState([])

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

    const getMovieSearch = async(searchText) => {
        setMovieSearchResult(await Api2.getMovieSearch(searchText))
    }

    const [inputSearchText, setInputSearchText] = useState('')

    const inputSearchTextHandler = (e) => {
        setInputSearchText(e.target.value)
      }

    const searchAction = () => {
        window.location.href = "/community/main?search=" + inputSearchText
    }

    useEffect(() => {
        getInfo();
        if(typeof(query.search) != "undefined") {
            getMovieSearch(query.search);
        }
    }, []);

    if (typeof(query.search) === "undefined") {
        return (
            <div>
                <Header></Header>
                <div className="Title">
                    <h1>인기 게시판 TOP 3</h1>
                    <div>
                        <CustomSearchArea inputHandler={inputSearchTextHandler} searchAction={searchAction}/>
                    </div>
                    
                </div>
                
                <div className="CommunitiesWrapper">
                    {  movies.map((movie, index) => 
                        <div className="Community">
                        <img src={ getPoster(movie.id) } width={"300rem"} height={"400rem"}/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={getCommunityLink(movie.id)}><h3>{movie.title}</h3></Link>
                        <div className="MoreInfo">
                            <Button id="movie-info" variant='secondary' onClick={() => gotoMovieInfo(movie.id)}>영화 정보</Button>
                        </div>
                        {/* <h6>{console.log(boards[index])}개의 게시글</h6> */}
                        </div>
                    )}
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <Header></Header>
                <div className="Title">
                    <h1>'{query.search}'에 대한 검색 결과</h1>
                    <div>
                        <CustomSearchArea inputHandler={inputSearchTextHandler} searchAction={searchAction}/>
                    </div>
                    
                </div>
                
                <div className="CommunitiesWrapper">
                    {  movieSearchResult.map((movie, index) => 
                        <div className="Community">
                        <img src={ getPoster(movie.id) } width={"300rem"} height={"400rem"}/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={getCommunityLink(movie.id)}><h3>{movie.title}</h3></Link>
                        <div className="MoreInfo">
                            <Button id="movie-info" variant='secondary' onClick={() => gotoMovieInfo(movie.id)}>영화 정보</Button>
                        </div>
                        {/* <h6>{console.log(boards[index])}개의 게시글</h6> */}
                        </div>
                    )}
                </div>

                <div className="Title">
                    <h1>인기 게시판 TOP 3</h1>
                </div>
                
                <div className="CommunitiesWrapper">
                    {  movies.map((movie, index) => 
                        <div className="Community">
                        <img src={ getPoster(movie.id) } width={"300rem"} height={"400rem"}/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={getCommunityLink(movie.id)}><h3>{movie.title}</h3></Link>
                        <div className="MoreInfo">
                            <Button id="movie-info" variant='secondary' onClick={() => gotoMovieInfo(movie.id)}>영화 정보</Button>
                        </div>
                        {/* <h6>{console.log(boards[index])}개의 게시글</h6> */}
                        </div>
                    )}
                </div>
            </div>
        );
    }
  
        
};

export default CommunityMain;
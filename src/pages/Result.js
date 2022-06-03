import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../component/Header';
import MainSearchSmall from '../component/MainSearchSmall';
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import queryString from "query-string"
import Api from "../utils/api/searchAPI"
import '../styles/Result.css'

const Result = ({match, location}) => {
    const query = queryString.parse(location.search)
    const [ searchResult, setSearchResult ] = useState([])

    const [ searchText, setSearchText ] = useState('')
    
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;
    const getDetail = (movieId) => `/result/detail/${movieId}`

    const inputSearchTextHandler = (e) => {
        setSearchText(e.target.value)
    }

    const sceneSearchAction = () => {
        window.location.href = "/scene?search="+ searchText
    }

    const lineSearchAction = () => {
        window.location.href = "/line?search="+ searchText
    }

    const sceneSearch = async () => {
        setSearchResult(await Api.getSceneSearchResult(query.search))
    }

    const lineSearch = async () => {
        setSearchResult(await Api.getLineSearchResult(query.search))
    }

    useEffect(() => {
        if(match.path === '/scene') {
            sceneSearch();
        } else {
            lineSearch();
        }
    },[])


    if(match.path==='/scene') {
        return ( 
            <div className="ResultArea">
                <Header></Header>
                <div className="SearchAreaSmall">
                    <MainSearchSmall 
                    inputHandler={inputSearchTextHandler}
                    selectedOption={match.path} 
                    placeHolder={query.search}
                    sceneSearchAction={sceneSearchAction}
                    lineSearchAction={lineSearchAction} />
                </div>
                
                <div className="ResultsWrapper">
                    {searchResult.map((result) => 
                        <div className="Result">
                        <img src={ getPoster(result.id) } width={"300rem"} height={"400rem"}/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={getDetail(result.id)}><h3>{result.title}</h3></Link>
                    </div>
                    )}
                </div>
            </div>
        );
    } else {
        return ( 
            <div className="ResultArea">
                <Header></Header>
                <div className="SearchAreaSmall">
                    <MainSearchSmall 
                    inputHandler={inputSearchTextHandler}
                    selectedOption={match.path} 
                    placeHolder={query.search}
                    sceneSearchAction={sceneSearchAction}
                    lineSearchAction={lineSearchAction} />
                </div>
                
                <div className="ResultsWrapper">
                    {searchResult.map((result) => 
                        <div className="Result">
                        <img src={ getPoster(result.movieDto.id) } width={"300rem"} height={"400rem"}/>
                        <Link style={{textDecoration: 'none', color: 'white'}} to={getDetail(result.movieDto.id)}><h3>{result.movieDto.title}</h3></Link>
                    </div>
                    )}
                </div>
            </div>
        );
    }
    
};

export default Result;
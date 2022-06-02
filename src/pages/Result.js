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
        console.log(await Api.getSceneSearchResult(query.search))
    }

    const lineSearch = async () => {
        setSearchResult(await Api.getLineSearchResult(query.search))
        console.log(await Api.getLineSearchResult(query.search))
    }

    useEffect(() => {
        if(match.path === '/scene') {
            sceneSearch();
        } else {
            lineSearch();
        }
    },[])

    return ( 
        <div className="ResultArea">
            <Header></Header>
            <div className="SearchArea">
                <MainSearchSmall 
                inputHandler={inputSearchTextHandler}
                selectedOption={match.path} 
                placeHolder={query.search}
                sceneSearchAction={sceneSearchAction}
                lineSearchAction={lineSearchAction} />
            </div>
            
            <div className="ResultsWrapper">
                <div className="Result">
                    <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                    <Link style={{textDecoration: 'none', color: 'white'}} to="/result/detail"><h3>타짜</h3></Link>
                </div>
                
                <div className="Result">
                    <img src={ ImgEx2 } width={"300rem"} height={"400rem"}/>
                    <h3>승리호</h3>
                </div>

                <div className="Result">
                    <img src={ ImgEx3 } width={"300rem"} height={"400rem"}/>
                    <h3>부산행</h3>
                </div>
            </div>
        </div>
    );
};

export default Result;
import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import MainSearch from '../component/MainSearch';
import { getOption } from '../services/home.js'
import '../styles/Home.css'

const Home = () => {
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
    
    return (
        <div>
            <Header />
            <MainSearch
            inputHandler={inputSearchTextHandler}
            sceneSearchAction={sceneSearchAction}
            lineSearchAction={lineSearchAction} />
        </div>
    );
};

export default Home;
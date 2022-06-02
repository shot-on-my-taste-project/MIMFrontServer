import React, { Component, useState } from 'react';
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import Logo from './Logo';
import * as Home from '../services/home.js'

const MainSearchSmall = (props) => {
    const { inputHandler, placeHolder, selectedOption, sceneSearchAction, lineSearchAction } = props
    const [ searchOption, setSearchOption ] = useState('picture')
    
    const getOption = () => {
      var result = document.getElementById("input-text-small");
      setSearchOption(result.getAttribute("name"))
    }

    if(searchOption === "picture") {
      return (
        <div className="SearchArea">
            <Logo></Logo>
            <div id="main-search">
                <input id="input-text-small" type="text" placeholder={ placeHolder } onChange={inputHandler}/>
                <div id="slate" onClick={ sceneSearchAction }>
                <img id="slate-open" src={ SlateImg1 } width={"40px"} height={"40px"}/>
                <img id="slate-close" src={ SlateImg2 } width={"40px"} height={"35px"}/>
                </div>
            </div>
            <SearchOptionNoExample getCheckedValue={getOption}></SearchOptionNoExample>
        </div>
      );
    } else {
      return (
        <div className="SearchArea">
            <Logo></Logo>
            <div id="main-search">
                <input id="input-text-small" type="text" placeholder={ placeHolder } onChange={inputHandler}/>
                <div id="slate" onClick={ lineSearchAction }>
                <img id="slate-open" src={ SlateImg1 } width={"40px"} height={"40px"}/>
                <img id="slate-close" src={ SlateImg2 } width={"40px"} height={"35px"}/>
                </div>
            </div>
            <SearchOptionNoExample getCheckedValue={getOption}></SearchOptionNoExample>
        </div>
      );
    }
      
}

  const SearchOptionNoExample = (props) => {
      const { getCheckedValue } = props;
      return (
        <div className="SearchOption">
          <div className="SelectOption">
            <div className="option">
              <input type="checkbox" class="search-opt" name="search-opt-small"
              id="picture-small" value="picture" onChange={getCheckedValue} onClick={() => Home.checkOnlyOneSmall('picture')}/>
              <label>장면검색</label>
            </div>

            <div className="option">
              <input type="checkbox" class="search-opt" name="search-opt-small" 
              id="text-small" value="text" onChange={getCheckedValue} onClick={() => Home.checkOnlyOneSmall('text')}/>
              <label>대사검색</label>
            </div>
          </div>
        </div>
      );

  }

export default MainSearchSmall;
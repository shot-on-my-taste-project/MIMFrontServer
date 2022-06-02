import React, { Component, useState } from 'react';
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import ImgEx from "../assets/image-ex.png"
import Logo from './Logo';
import * as Home from '../services/home.js'
const MainSearch = (props) => {
  const { inputHandler, sceneSearchAction, lineSearchAction } = props
  const [ searchOption, setSearchOption ] = useState('picture')

  const getOption = () => {
    var result = document.getElementById("input-text");
    setSearchOption(result.getAttribute("name"))
  }

  if(searchOption === "picture") {
    return (
      <div className="SearchArea">
        <Logo></Logo>
        <div id="main-search">
          <input id="input-text" name="picture" type="text" onChange={inputHandler} placeholder=" ex) 화투를 치는 장면"/>
            <div id="slate" onClick={sceneSearchAction}>
              <img id="slate-open" src={ SlateImg1 } width={"40px"} height={"40px"}/>
              <img id="slate-close" src={ SlateImg2 } width={"40px"} height={"35px"}/>
            </div>
        </div>
        <SearchOption 
        getCheckedValue={getOption}/>
      </div>
    );
  } else {
    return (
      <div className="SearchArea">
        <Logo></Logo>
        <div id="main-search">
          <input id="input-text" name="picture" type="text" onChange={inputHandler} placeholder=" ex) 화투를 치는 장면"/>
            <div id="slate" onClick={lineSearchAction}>
              <img id="slate-open" src={ SlateImg1 } width={"40px"} height={"40px"}/>
              <img id="slate-close" src={ SlateImg2 } width={"40px"} height={"35px"}/>
            </div>
        </div>
        <SearchOption 
        getCheckedValue={getOption}/>
      </div>
    );
  }

  
}

const SearchOption = (props) => {
    const { getCheckedValue } = props;
      return (
        <div className="SearchOption">
          <div className="SelectOption">
            <div className="option">
              <input type="checkbox" class="search-opt" name="search-opt"
              id="picture" value="picture" onChange={getCheckedValue} onClick={(e) => { Home.checkOnlyOne('picture');}}/>
              <label>장면검색</label>
            </div>

            <div className="option">
              <input type="checkbox" class="search-opt" name="search-opt"
              id="text" value="text" onChange={getCheckedValue} onClick={(e) => { Home.checkOnlyOne('text');}}/>
              <label>대사검색</label>
            </div>
          </div>

          <div className="example">
            <SearchImgExample></SearchImgExample>
            <SearchScriptExample></SearchScriptExample>
          </div>
        </div>
      );    
}

  class SearchImgExample extends Component {
    render() {
      return (
        <div className="SearchImgExample" id="search-image-ex">
            <img id="image-search-ex" src={ ImgEx } width={"180rem"} height={"120rem"}/>
            <span>
                <br/>영화 '타짜'에 등장하는<br/>화투를 치는 장면입니다.<br/>
                다음 예시와 같이<br/>여러분들의 기억 속에 있는<br/>영화 장면을 검색해 보세요!
            </span>
        </div>
      );
    }
  }

  class SearchScriptExample extends Component {
    render() {
      return (
        <div className="SearchScriptExample" id="search-script-ex">
            <span>
                <br/>'손모가지 날아가붕게'는<br/>영화 '타짜'에 등장하는 명대사입니다.<br/>
                다음 예시와 같이 여러분들의 기억 속에 있는 <br/>영화 대사를 검색해 보세요!
            </span>
        </div>
      );
    }
  }

export default MainSearch;
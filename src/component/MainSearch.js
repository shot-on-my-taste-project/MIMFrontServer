import React, { Component } from 'react';
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import ImgEx from "../assets/image-ex.png"
import Logo from './Logo';
import * as Home from '../services/home.js'
class MainSearch extends Component {
    render() {
        return (
            <div className="SearchArea">
                <Logo></Logo>
                <div id="main-search">
                    <input id="input-text" type="text" placeholder=" ex) 화투를 치는 장면"/>
                    <div id="slate">
                    <img id="slate-open" src={ SlateImg1 } width={"40px"} height={"40px"}/>
                    <img id="slate-close" src={ SlateImg2 } width={"40px"} height={"35px"}/>
                    </div>
                </div>
                <SearchOption></SearchOption>
            </div>
        );
    };
}

class SearchOption extends Component {
    render() {
      return (
        <div className="SearchOption">
          <div className="SelectOption">
            <div className="option">
              <input type="checkbox" class="search-opt" name="search-opt" checked
              id="picture" value="picture" onClick={() => Home.checkOnlyOne('picture')}/>
              <label>장면검색</label>
            </div>

            <div className="option">
              <input type="checkbox" class="search-opt" name="search-opt" 
              id="text" value="text" onClick={() => Home.checkOnlyOne('text')}/>
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
                <br/>'손모가지 날아가붕게'는 영화 '타짜'에 등장하는 명대사입니다.<br/>
                다음 예시와 같이 여러분들의 기억 속에 있는 영화 대사를 <br/>검색해 보세요!
            </span>
        </div>
      );
    }
  }

export default MainSearch;
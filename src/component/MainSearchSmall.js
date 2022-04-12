import React, { Component } from 'react';
import SlateImg1 from "../assets/slate-open.png"
import SlateImg2 from "../assets/slate-close.png"
import ImgEx from "../assets/image-ex.png"
import Logo from './Logo';
import * as Home from '../services/home.js'

class MainSearchSmall extends Component {
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
              <SearchOptionNoExample></SearchOptionNoExample>
          </div>
      );
  };
}

  class SearchOptionNoExample extends Component {
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
        </div>
      );
    }
  }

export default MainSearchSmall;
import SearchBtn  from '../assets/search.png'
import React, { Component } from 'react';
import '../styles/Custom.css'

class CustomSearchArea extends Component {
    render() {
      const { inputHandler, searchAction, placeHolder } = this.props;
        return (
        <div className="CustomSearchArea">
            <input type="text" onChange={ inputHandler } placeholder={ placeHolder }/>
            <img onClick={searchAction} src={ SearchBtn } width="30rem" height="30rem"/>
        </div>
      );
    }
  }
  
export default CustomSearchArea;
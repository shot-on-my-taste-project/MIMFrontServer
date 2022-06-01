import SearchBtn  from '../assets/search.png'
import React, { Component } from 'react';
import '../styles/Custom.css'

class CustomSearchArea extends Component {
    render() {
      const { inputHandler, searchAction } = this.props;
        return (
        <div className="CustomSearchArea">
            <input type="text" onChange={ inputHandler }/>
            <img onClick={searchAction} src={ SearchBtn } width="30rem" height="30rem"/>
        </div>
      );
    }
  }
  
export default CustomSearchArea;
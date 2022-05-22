import SearchBtn  from '../assets/search.png'
import React, { Component } from 'react';
import '../styles/Custom.css'

class CustomSearchArea extends Component {
    render() {
        return (
        <div className="CustomSearchArea">
            <input type="text"/>
            <img src={ SearchBtn } width="30rem" height="30rem"/>
        </div>
      );
    }
  }
  
export default CustomSearchArea;
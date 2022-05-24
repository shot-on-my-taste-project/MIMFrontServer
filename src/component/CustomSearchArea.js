import SearchBtn  from '../assets/search.png'
import React, { Component, useState } from 'react';
import '../styles/Custom.css'

class CustomSearchArea extends Component {
    render() {
      const { event } = this.props;
        return (
        <div className="CustomSearchArea">
            <input type="text"/>
            <img onClick={event} src={ SearchBtn } width="30rem" height="30rem"/>
        </div>
      );
    }
  }
  
export default CustomSearchArea;
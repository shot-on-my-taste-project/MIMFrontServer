import WriteBtn  from '../assets/write-btn.png'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Custom.css'

class WriteButton extends Component {
    render() {
        const { moveTo } = this.props;
        return (
        <div className="WriteButton">
            <Link to={ moveTo }><img src={ WriteBtn } width="45rem" height="45rem"/></Link>
        </div>
      );
    }
  }
  
export default WriteButton;
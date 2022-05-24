import Profile  from '../assets/profile.jpg'
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import SearchBtn from '../assets/search.png'
import '../styles/Admin.css'

class BoardReportReason extends Component {
    render() {
        return (
        <div className="BoardReportReason">
            <h1>타짜</h1>
            <div className="TimeSearch">
              <input type="datetime-local"/>~<input type="datetime-local"/>
              <img id="search-btn" src={SearchBtn} width="40rem" height="40rem"/>
            </div> 
        </div>
      );
    }
  }
  
export default BoardReportReason;
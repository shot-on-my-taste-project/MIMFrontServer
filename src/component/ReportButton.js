import ReportBtn  from '../assets/report-btn.png'
import React, { Component } from 'react';

class ReportButton extends Component {
    render() {
        const { action } = this.props;
        return (
        <div className="ReportButton">
            <img onclick={ action } src={ ReportBtn } width="50rem" height="60rem"/>
        </div>
      );
    }
  }
  
export default ReportButton;
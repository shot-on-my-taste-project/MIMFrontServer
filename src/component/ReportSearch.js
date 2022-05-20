import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class ReportSearch extends Component {
    render() {
        return (
            <div className="ReportSearch">
                <select className="ReasonSearch">
                    <option>신고 사유</option>
                    <option>부적절한 홍보 게시글</option>
                    <option>음란성 및 청소년에게 부적절한 게시글</option>
                    <option>명예훼손 및 저작권 침해 게시글</option>
                </select>
         
                <div className="TimeSearch">
                    <input type="datetime-local"/>~<input type="datetime-local"/>
                </div>

                <Button>검색</Button>
            </div>
        );
    };
}

export default ReportSearch;
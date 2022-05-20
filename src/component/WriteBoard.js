import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import * as Home from '../services/home.js'

class WriteBoard extends Component {
    render() {
        return (
            <div className="WriteArea">
                <div className="WriteWrapper">
                    <table>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input id="board-title" type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea id="board-content"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="ButtonWrapper">
                    <Button variant="danger">등록</Button>
                    <Button variant="secondary">취소</Button>
                </div>
            </div>
        );
    }
}

export default WriteBoard;
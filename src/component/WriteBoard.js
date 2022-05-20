import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import * as Home from '../services/home.js'

class WriteBoard extends Component {
    render() {
        return (
            <div className="SideBar">
                <table>
                    <tr>
                        <th colSpan={1}>제목</th>
                        <td colSpan={1}>
                            <input type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={1}>내용</th>
                        <td colSpan={1}>
                            <input type="text"/>
                        </td>
                    </tr>
                </table>
                <div className="ButtonWrapper">
                    <Button variant="danger">등록</Button>
                    <Button variant="secondary">취소</Button>
                </div>
            </div>
        );
    }
}

export default WriteBoard;
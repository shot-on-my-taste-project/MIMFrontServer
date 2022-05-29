import React from 'react';
import { Button } from 'react-bootstrap'

const WriteBoard = (props) => {
    const { titleHandler, contentHandler, enrollEvent, cancelEvent } = props;
    
    return (
        <div className="WriteArea">
            <div className="WriteWrapper">
                <table>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input id="board-title" type="text" onChange={titleHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea id="board-content" onChange={contentHandler}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button onClick={ enrollEvent } variant="danger">등록</Button>
                <Button onClick={ cancelEvent } variant="secondary">취소</Button>
            </div>
        </div>
);
    
}

export default WriteBoard;
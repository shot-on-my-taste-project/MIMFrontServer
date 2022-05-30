import React from 'react';
import { Button } from 'react-bootstrap'

const UpdateBoard = (props) => {
    const { originTitle, originContent, titleHandler, contentHandler, updateEvent, cancelEvent } = props;
    
    return (
        <div className="WriteArea">
            <div className="WriteWrapper">
                <table>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input id="board-title" type="text" onChange={titleHandler} placeholder={originTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea id="board-content" onChange={contentHandler} placeholder={originContent}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button onClick={ updateEvent } variant="danger">수정</Button>
                <Button onClick={ cancelEvent } variant="secondary">취소</Button>
            </div>
        </div>
);
    
}

export default UpdateBoard;
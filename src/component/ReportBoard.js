import React from 'react';
import { Button } from 'react-bootstrap'

const ReportBoard = (props) => {
    const { reportReasonHandler, reportEvent, cancelEvent } = props;
    
    return (
        <div className="ReportArea">
            <div className="ReportWrapper">
                <table>
                    <tr>
                        <th>신고 사유</th>
                        <td>
                            <textarea id="board-content" onChange={reportReasonHandler}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="ButtonWrapper">
                <Button onClick={ reportEvent } variant="danger">신고</Button>
                <Button onClick={ cancelEvent } variant="secondary">취소</Button>
            </div>
        </div>
);
    
}

export default ReportBoard;
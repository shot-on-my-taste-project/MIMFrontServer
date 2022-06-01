import React, { useState } from 'react'
import Header from '../component/Header';
import ReportBoard from '../component/ReportBoard';
import '../styles/Community.css'
import Api from '../utils/api/communityAPI';

const FreeBoardUpdate = ({match}) => {
    // 파라미터 정제
    const paramPostId = match.params.postId;

    const [inputReportReasonContent, setinputReportReasonContent] = useState('')

    const inputReportReasonContentHandler = (e) => {
        setinputReportReasonContent(e.target.value)
    }

    const reportEvent = async() => {
        await Api.reportPost(inputReportReasonContent, "1", paramPostId)
    }

    const cancelEvent = () => {
        window.location.href="/community/free"
    }

    return (
        <div>
            <Header></Header>
            <div className="FreeBoardThumb">
                <h1>자유 게시판</h1>
            </div>
            <ReportBoard
            reportReasonHandler={inputReportReasonContentHandler} 
            reportEvent={reportEvent}
            cancelEvent={cancelEvent}
            ></ReportBoard>
        </div>
    );
};

export default FreeBoardUpdate;
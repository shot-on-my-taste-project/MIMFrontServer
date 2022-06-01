import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../component/Header';
import CommunityInfo from '../component/CommunityInfo';
import ReportBoard from '../component/ReportBoard';
import '../styles/Community.css'
import Api from '../utils/api/communityAPI';

const BoardReport = ({match}) => {
  // 파라미터 정제
  const paramMovieId = match.params.movieId
  const paramPostId = match.params.postId;

  const [inputReportReasonContent, setinputReportReasonContent] = useState('')

  const inputReportReasonContentHandler = (e) => {
      setinputReportReasonContent(e.target.value)
  }

  const reportEvent = async() => {
      await Api.reportPost(inputReportReasonContent, paramMovieId, paramPostId)
  }

  const cancelEvent = (movieId) => {
      window.location.href = `/community/movie/${movieId}`
  }

    return (
        <div>
            <Header></Header>
            <CommunityInfo
            movieId={paramMovieId}
            ></CommunityInfo>
            <ReportBoard
            reportReasonHandler={inputReportReasonContentHandler} 
            reportEvent={reportEvent}
            cancelEvent={() => cancelEvent(paramMovieId)}></ReportBoard>
        </div>
    );
};

export default BoardReport;
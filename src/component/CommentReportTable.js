import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AxiosError } from 'axios';

const CommentReportTable = (props) => {
  const { reports, buttonHandler } = props;
  console.log(reports)
  const nullCheck = (reports) => reports instanceof AxiosError || typeof reports === "undefined" || reports == null || reports.length == 0
  console.log(nullCheck(reports))

const getPostLink = (boardId, postId) => {
  if(boardId === 1)
    return `/community/free/${postId}`
  else
    return `/community/movie/${boardId}/${postId}`
}
  return (
    <div className="BoardReport">
      <div className="TableWrapper">
        <div className="TableContainer">
          <table className="tablecss table">
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="30%" />
              <col width="20%" />
              <col width="5%" />
              <col width="5%" />
            </colgroup>
            <thead>
              <tr>
                <th>신고 번호</th>
                <th>게시판</th>
                <th>글 번호</th>
                <th>댓글 번호</th>
                <th>신고 사유</th>
                <th>신고 시간</th>
                <th>링크</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {nullCheck(reports) ? '정보 없음' : reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.movieDto.title}</td>
                  <td>{report.postingDto.id}</td>
                  <td>{report.commentDto.id}</td>
                  <td>
                    {report.reportReason}
                    <br></br>
                    댓글내용:{report.commentDto.content}
                  </td>
                  <td>{report.reportTimestamp.substr(0, 16).replace('T', ' ')}</td>
                  <td><Link to={getPostLink(report.movieDto.id, report.postingDto.postingNumber)}><Button>L</Button></Link></td>
                  <td><Button onClick={buttonHandler} id={report.id}>R</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentReportTable;
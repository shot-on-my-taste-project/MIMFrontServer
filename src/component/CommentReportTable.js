import React, { Component, useState } from 'react';
import ReportSearch from './ReportSearch';
import Pagenation from '../component/Pagenation';
import { Button } from 'react-bootstrap';
import { pagenate } from '../services/pagenate'
import { AxiosError } from 'axios';
import Api from '../utils/api/adminApi'

const getBoards = () => { // 영화 정보를 반환하는 함수
  const boards = [
    { id: 1678, board: "타짜", boardId: "327", reason: "부적절한 홍보 게시글", time: "13:33" },
    { id: 1677, board: "타짜", boardId: "327", reason: "부적절한 홍보 게시글", time: "13:33" },
    { id: 1676, board: "승리호", boardId: "56", reason: "음란성 및 청소년에게 부적절한 게시글", time: "13:33" },
    { id: 1675, board: "타짜", boardId: "327", reason: "부적절한 홍보 게시글", time: "13:33" },
    { id: 1674, board: "변산", boardId: "89", reason: "명예훼손 및 저작권 침해 게시글", time: "13:33" },
    { id: 1673, board: "타짜", boardId: "327", reason: "부적절한 홍보 게시글", time: "13:33" }
  ]
  return boards;
}

const CommentReportTable = (props) => {
  const { reports, buttonHandler } = props;
  console.log(reports)
  const nullCheck = (reports) => reports instanceof AxiosError || typeof reports === "undefined" || reports == null || reports.length == 0
  console.log(nullCheck(reports))

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
                  <td><Button >L</Button></td>
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
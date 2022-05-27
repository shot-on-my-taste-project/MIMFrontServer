import React, { Component, useState } from 'react';
import ReportSearch from './ReportSearch';
import Pagenation from '../component/Pagenation';
import { Button } from 'react-bootstrap';
import { pagenate } from '../services/pagenate'

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

const ReportTable = (props) => {
    const [boards, setBoards] = useState({ // 영화 정보를 담는 state
        data: getBoards(), // 영화 정보
        pageSize: 5, // 한 페이지에 보여줄 아이템(영화목록) 개수
        currentPage: 1 // 현재 활성화된 페이지 위치
      });

      const handlePageChange = (page) => {
        setBoards({ ...boards, currentPage: page });
      };
    
      const { data, pageSize, currentPage } = boards;
      const pagedBoards = pagenate(data, currentPage, pageSize); // 페이지 별로 아이템이 속한 배열을 얻어옴
    
      const { length: count } = boards.data;

    return (
        <div className="BoardReport">
            <div className="TableWrapper">
          <div className="TableContainer">
            <table className="tablecss table">
              <colgroup>
                <col width="10%"/>
                <col width="20%"/>
                <col width="10%"/>
                <col width="50%"/>
                <col width="10%"/>
              </colgroup>
            <thead>
                <tr>
                <th>신고 번호</th>
                <th>게시판</th>
                <th>글 번호</th>
                <th>신고 사유</th>
                <th>신고 시간</th>
                <th>링크</th>
                <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {pagedBoards.map((board) => (
            <tr key={board.id}>
              <td>{board.id}</td>
              <td>{board.board}</td>
              <td>{board.boardId}</td>
              <td>{board.reason}</td>
              <td>{board.time}</td>
              <td><Button>L</Button></td>
              <td><Button>R</Button></td>
            </tr>
          ))}
            </tbody>
            </table>
          </div>
          

          <Pagenation
            pageSize={pageSize}
            itemsCount={count}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
};

export default ReportTable;
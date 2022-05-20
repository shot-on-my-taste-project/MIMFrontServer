import React, { Component, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../component/Header';
import Pagenation from '../component/Pagenation';
import Thumb from "../assets/tazza-thumb.jpg"
import '../styles/Community.css'
import { pagenate } from '../services/pagenate'


const CommunityMovie = () => {
    const getBoards = () => { // 영화 정보를 반환하는 함수
        const boards = [
          { id: 1678, title: "동작 그만 밑장빼기냐?", time: "13:33" },
          { id: 1677, title: "묻고 트리플로 가", time: "13:32" },
          { id: 1676, title: "2시부터 단관할 사람", time: "13:32" },
          { id: 1675, title: "곧 사쿠라의 계절이네요", time: "13:30" },
          { id: 1674, title: "싸늘하다 가슴에 비수가 날아와 꽂힌다", time: "13:29" },
          { id: 1673, title: "집에 가고 싶다", time: "13:28" },
          { id: 1672, title: "침대가 보고 싶다", time: "13:28" },
          { id: 1671, title: "학교 온 지 1시간도 안됐는데", time: "13:27" },
          { id: 1670, title: "개발이 끝이 없네", time: "13:26" },
          { id: 1669, title: "ㅁㄴㅇㄻㄴㅇㄹ", time: "13:25" },
          { id: 1668, title: "asdgfdsafd", time: "13:24" },{ id: 1678, title: "동작 그만 밑장빼기냐?", time: "13:33" },
          { id: 1677, title: "묻고 트리플로 가", time: "13:32" },
          { id: 1676, title: "2시부터 단관할 사람", time: "13:32" },
          { id: 1675, title: "곧 사쿠라의 계절이네요", time: "13:30" },
          { id: 1674, title: "싸늘하다 가슴에 비수가 날아와 꽂힌다", time: "13:29" },
          { id: 1673, title: "집에 가고 싶다", time: "13:28" },
          { id: 1672, title: "침대가 보고 싶다", time: "13:28" },
          { id: 1671, title: "학교 온 지 1시간도 안됐는데", time: "13:27" },
          { id: 1670, title: "개발이 끝이 없네", time: "13:26" },
          { id: 1669, title: "ㅁㄴㅇㄻㄴㅇㄹ", time: "13:25" },
          { id: 1668, title: "asdgfdsafd", time: "13:24" },
          { id: 1678, title: "동작 그만 밑장빼기냐?", time: "13:33" },
          { id: 1677, title: "묻고 트리플로 가", time: "13:32" },
          { id: 1676, title: "2시부터 단관할 사람", time: "13:32" },
          { id: 1675, title: "곧 사쿠라의 계절이네요", time: "13:30" },
          { id: 1674, title: "싸늘하다 가슴에 비수가 날아와 꽂힌다", time: "13:29" },
          { id: 1673, title: "집에 가고 싶다", time: "13:28" },
          { id: 1672, title: "침대가 보고 싶다", time: "13:28" },
          { id: 1671, title: "학교 온 지 1시간도 안됐는데", time: "13:27" },
          { id: 1670, title: "개발이 끝이 없네", time: "13:26" },
          { id: 1669, title: "ㅁㄴㅇㄻㄴㅇㄹ", time: "13:25" },
          { id: 1668, title: "asdgfdsafd", time: "13:24" }
        ]
        return boards;
      }

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
      if (count === 0) 
        return <p>글 정보가 없습니다.</p>;
    return (
        <div className="CommunityMovieContainer">
            <Header></Header>
            <img className="ThumbImg" src={ Thumb } width={"100%"} height={"50%"}/>
           
            <div className="BoardInfo">
                <div className="Text">
                  <h1>타짜</h1><h4>789명과 함께 이야기 중</h4>
                </div>
                <div className="Btn">
                  <Button>신고</Button><Button>즐겨찾기</Button>
                </div>
                
            </div>
            
            <div className="SubSearchArea">
                <input type="text"/><Button>검색</Button>
                <Link to="/community/movie/write"><Button>글쓰기</Button></Link>
            </div>
            
            <div className="TableWrapper">
              <div className="TableContainer">
                <table className="tablecss table">
                  <colgroup>
                    <col width="10%"/>
                    <col width="80%"/>
                    <col width="10%"/>
                  </colgroup>
                <thead>
                    <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedBoards.map((board) => (
                <tr key={board.id}>
                  <td>{board.id}</td>
                  <td>{board.title}</td>
                  <td>{board.time}</td>
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

export default CommunityMovie;
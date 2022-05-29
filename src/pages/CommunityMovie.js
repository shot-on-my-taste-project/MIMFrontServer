import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import Thumb from "../assets/tazza-thumb.jpg"
import '../styles/Community.css'
import CustomSearchArea from '../component/CustomSearchArea';
import WriteButton from '../component/WriteButton';
import ReportButton from '../component/ReportButton';
import FavoriteButton from '../component/FavoriteButton';
import Api from "../utils/api/communityAPI"
import Api2 from "../utils/api/searchAPI"
import CommunityInfo from '../component/CommunityInfo';
import PagenationV2 from "../component/PagenationV2.js"

const CommunityMovie = ({match}) => {
  // 파라미터 정제
  const paramMovieId = match.params.movieId;
  
  const [board, setBoard] = useState([])
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const getPosts = async() => {
    setBoard(await Api.getBoard(paramMovieId).then(async x => {
      setPosts(await Api.getAllMovieBoardPosts(x.id, currentPage, 5))
      return x
    }))
  }

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  const getWritePostLink = (movieId) => `/community/movie/write/${movieId}`;

    return (
        <div className="CommunityMovieContainer">
            <Header></Header>
            <CommunityInfo
            movieId={paramMovieId}
            ></CommunityInfo>
            
            <div className="SubSearchArea">
                <CustomSearchArea />
                <WriteButton moveTo={ getWritePostLink(paramMovieId) }/>
            </div>
            
            <div className="TableWrapper">
            <div className="TableContainer">
              <table className="tablecss table">
                <colgroup>
                  <col width="10%"/>
                  <col width="70%"/>
                  <col width="20%"/>
                </colgroup>
              <thead>
                  <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성시간</th>
                  </tr>
              </thead>
              <tbody>
                  {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.time.substr(0, 16).replace('T', ' ')}</td>
              </tr>
            ))}
              </tbody>
              </table>
            </div>

              <PagenationV2
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={handlePageChange}
            ></PagenationV2>
            </div>
          </div>
        
    );
};

export default CommunityMovie;
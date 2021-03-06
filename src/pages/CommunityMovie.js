import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import '../styles/Community.css'
import CustomSearchArea from '../component/CustomSearchArea';
import WriteButton from '../component/WriteButton';
import Api from "../utils/api/communityAPI"
import Api2 from "../utils/api/searchAPI"
import CommunityInfo from '../component/CommunityInfo';
import PagenationV2 from "../component/PagenationV2.js"
import queryString from "query-string"

const CommunityMovie = ({match, location}) => {
  // 파라미터 정제
  const paramMovieId = match.params.movieId;
  const query = queryString.parse(location.search)
  
  const [board, setBoard] = useState([])
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const getPosts = async() => {
    setBoard(await Api.getBoard(paramMovieId).then(async x => {
      if(typeof(query.search) === "undefined")
        setPosts(await Api.getAllMovieBoardPosts(x.id, currentPage, 5))
      else
        setPosts(await Api2.getPostingSearch(x.id, currentPage, 5, query.search))
      return x
    }))
  }

  const [inputSearchText, setInputSearchText] = useState('')

  const inputSearchTextHandler = (e) => {
      setInputSearchText(e.target.value)
    }

  const searchAction = () => {
      window.location.href = "/community/movie/"+ paramMovieId +"?search=" + inputSearchText
  }

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  const getPostDetailLink = (movieId, postId) => `/community/movie/${movieId}/${postId}`
  const getWritePostLink = (movieId) => `/community/movie/write/${movieId}`;

    return (
        <div className="CommunityMovieContainer">
            <Header></Header>
            <CommunityInfo
            movieId={paramMovieId}
            ></CommunityInfo>
            
            <div className="SubSearchArea">
              <CustomSearchArea inputHandler={inputSearchTextHandler} searchAction={searchAction} placeHolder={query.search}/>
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
              <tr key={post.postingNumber}>
                <td>{post.postingNumber}</td>
                <td><Link style={{textDecoration: 'none', color: 'white'}} to={getPostDetailLink(paramMovieId, post.postingNumber)}>{post.title}</Link></td>
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
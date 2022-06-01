import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import PagenationV2 from "../component/PagenationV2"
import '../styles/Community.css'
import CustomSearchArea from '../component/CustomSearchArea';
import WriteButton from '../component/WriteButton';
import Api from '../utils/api/communityAPI';
import Api2 from '../utils/api/searchAPI';
import queryString from "query-string"


const CommunityFree = ({location}) => {
  const query = queryString.parse(location.search)

  const [posts, setPosts] = useState([])

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const getPosts = async() => {
    if(typeof(query.search) === "undefined") {
      setPosts(await Api.getAllFreeBoardPosts(currentPage, 10).then(x => {
        setTotalPage(x.totalPages)
        return x.content
      }))
    } else {
      setPosts(await Api2.getPostingSearch(1, currentPage, 10, query.search).then(x => {
        setTotalPage(x.totalPages)
        return x
      }))
    }
  }

  const [inputSearchText, setInputSearchText] = useState('')

  const inputSearchTextHandler = (e) => {
      setInputSearchText(e.target.value)
    }

  const searchAction = () => {
      window.location.href = "/community/free?search=" + inputSearchText
  }

  const getPostDetailLink = (postId) => `/community/free/${postId}`

  useEffect(() => {
    getPosts();
  }, [currentPage]);


    return (
      <div className="CommunityMovieContainer">
          <Header></Header>
          <div className="FreeBoardThumb">
              <h1>자유 게시판</h1>
              <div className="SubSearchArea">
                <CustomSearchArea inputHandler={inputSearchTextHandler} searchAction={searchAction} placeHolder={query.search}/>
                  <WriteButton moveTo="/community/free/write" />
              </div>
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
                <td>{ post.postingNumber }</td>
                <td><Link style={{textDecoration: 'none', color: 'white'}} to={getPostDetailLink(post.postingNumber)}>{post.title}</Link></td>
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

export default CommunityFree;
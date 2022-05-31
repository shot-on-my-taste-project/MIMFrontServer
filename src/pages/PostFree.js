import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import CustomSearchArea from '../component/CustomSearchArea';
import WriteButton from '../component/WriteButton';
import PostDetail from '../component/PostDetail';
import Api from "../utils/api/communityAPI"

import '../styles/Community.css'

const PostFree = ({match}) => {
    // 파라미터 정제
    const paramPostId = match.params.postId;
    
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    const getPost = async() => {
        setPost(await Api.getPostDetail(1, paramPostId))
        setComments(await Api.getAllComments(1, paramPostId))
    }
    useEffect(() => { getPost() }, [])

    return (
        <div className="CommunityMovieContainer">
            <Header></Header>
          <div className="FreeBoardThumb">
              <h1>자유 게시판</h1>
              <div className="SubSearchArea">
                  <CustomSearchArea />
                  <WriteButton moveTo="/community/free/write" />
              </div>
          </div>

          <div className="PostContent">
                <PostDetail
                movieId="1"
                boardId="1"
                postId={post.id}
                title={post.title}
                writtenTime={post.time}
                writer={post.userId}
                content={post.content}
                comments={comments}>
                </PostDetail>
            </div>
        </div>
    );
};

export default PostFree;
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import '../styles/Community.css'
import { getCookie } from '../utils/Cookie';
import Api from '../utils/api/communityAPI';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

const PostDetail = (props) => {
    
        const { movieId, postNumber, postId, title, writtenTime, writer, content, comments } = props;
        const getProfile = (userId) => `http://fhdufhdu.iptime.org:8081/users/${userId}/profile`

        const [ writeCommentContent, setWriteCommentContent ] = useState([])

        const writeCommentContentHandler = (e) => {
            setWriteCommentContent(e.target.value)
        }

        const getMovieCommunityMainLink = (movieId) => {
            if(movieId === "1")
                window.location.href = `/community/free`
            else
                window.location.href = `/community/movie/${movieId}`
        }

        const getUpdatePostLink = (movieId, postId) => {
            if(movieId === "1")
                window.location.href = `/community/free/update/${postId}`
            else
                window.location.href = `/community/movie/${movieId}/update/${postId}`
        }

        const deletePostFunc = async () => {
            await Api.deletePost(movieId, postId)
        }

        const reportPostClick = (movieId, postId) => {
            if(movieId === "1") 
                window.location.href = `/community/free/report/${postId}`
            else
                window.location.href = `/community/movie/${movieId}/report/${postId}` 
        }

        const commentData = {
            "content": writeCommentContent,
            "depth": 0,
            "postingId": postId
        }

        const uploadComment = async () => {
            await Api.writeComment(commentData, movieId, postNumber)
        }

        return (
            <div className="PostDetail">
                <div className="PostInfo">
                    <div className="TitleArea">
                        <h1>{title}</h1>
                    </div>
                    <div className="WrittenInfo">
                        <div>작성자: {writer}</div>
                        <div id="written-time">작성일: {writtenTime}</div>        
                    </div>
                </div>
                <hr/>
                <div className="ContentWrapper">
                    <div className="PostContentContainer">{content}</div>
                    <div className="PostBtnWrapper">
                    {
                        getCookie("user-id") === writer
                        ? <><Button onClick={() => getUpdatePostLink(movieId, postId)} variant="secondary">수정</Button>
                        <Button onClick={deletePostFunc} variant="secondary">삭제</Button></>
                        : <><Button onClick={() => reportPostClick(movieId, postId)} variant="secondary">신고</Button></>
                    }
                    <Button onClick={() => {getMovieCommunityMainLink(movieId)}} variant="secondary">목록</Button>
                    </div>
                </div>
                <hr/>
                <div className="ReplyWrapper">
                    {comments && comments.map((comment, index) => 
                    comment.depth===0 && (
                        <>
                            <SingleComment 
                            key={index}
                            movieId={movieId}
                            postNumber={postNumber}
                            postId={postId}
                            comment={comment}
                            Comments={comments}
                            />
                            <ReplyComment 
                            key={index}
                            movieId={movieId}
                            postNumber={postNumber}
                            postId={postId}
                            comment={comment} 
                            Comments={comments}/>
                        </>
                        )
                    )}
                    <hr/>
                    <div className="WriteReply">  
                        <img src={getProfile(getCookie('user-id'))} width="50rem" height="50rem" />
                        <div className="ReplyContentWrapper">
                            <h6>{getCookie('user-id')}</h6>
                            <textarea onChange={writeCommentContentHandler}/>
                        </div>                    
                        <Button onClick={uploadComment} variant="danger">등록</Button>
                    </div>
                </div>
            </div>
        );
    }

  
export default PostDetail;
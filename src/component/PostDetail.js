import Profile  from '../assets/profile.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import '../styles/Community.css'
import { getCookie } from '../utils/Cookie';
import Api from '../utils/api/communityAPI';

const PostDetail = (props) => {
    
        const { movieId, postNumber, postId, title, writtenTime, writer, content, comments } = props;
        const [ writeCommentContent, setWriteCommentContent ] = useState([])
        
        const getProfile = (userId) => `http://fhdufhdu.iptime.org:8081/users/${userId}/profile`
        
        const getMovieCommunityMainLink = (movieId) => {
            if(movieId === "1")
                window.location.href = `/community/free`
            else
                window.location.href = `/community/movie/${movieId}`
        }

        const getUpdatePostLink = (movieId, postId) => {
            if(movieId === "1")
                return `/community/free/update/${postId}`
            else
                return `/community/movie/${movieId}/update/${postId}`
        }

        const getContentContainer = (commentId) => `content-container${commentId}`
        
        const deletePostFunc = async () => {
            await Api.deletePost(movieId, postId)
        }

        const writeCommentContentHandler = (e) => {
            setWriteCommentContent(e.target.value)
        }

        const commentData = {
            "content": writeCommentContent,
            "depth": 0,
            "postingId": postId
        }

        const uploadComment = async () => {
            await Api.writeComment(commentData, movieId, postNumber)
        }

        const deleteComment = async (commentId) => {
            await Api.deleteComment(movieId, postNumber, commentId)
        }

        const updateComment = async (updateSentence, commentId) => {
            await Api.updateComment(updateSentence, movieId, postNumber, commentId)
        }

        const reportComment = async(reportSentence, commentId) => {
            await Api.reportComment(reportSentence, movieId, postNumber, commentId)
        }
        
        const updateCommentClick = (commentId) => {
            var container = document.getElementById(`content-container${commentId}`)
            // var commentId = container.parentNode.parentNode.parentNode.getAttribute("id")
            container.removeChild(container.firstChild)
            // console.log(commentId)
            const textArea = document.createElement("textarea")
            textArea.setAttribute("id", "update-contents")
    
            const button = document.createElement("button")
            button.appendChild(document.createTextNode("수정"))
            button.addEventListener("click", async () => {
                updateComment(textArea.value, commentId)
            })
            
            container.appendChild(textArea)
            container.appendChild(button)
        }

        const reportPostFunc = async() => {
            await Api.reportPost()
        }

        const reportCommentClick = (commentId) => {
            var container = document.getElementById(`content-container${commentId}`)
            // var commentId = container.parentNode.parentNode.parentNode.getAttribute("id")
            container.removeChild(container.firstChild)
            
            const textArea = document.createElement("textarea")
            textArea.setAttribute("id", "update-contents")
    
            const button = document.createElement("button")
            button.appendChild(document.createTextNode("신고"))
            button.addEventListener("click", async () => {
                reportComment(textArea.value, commentId)
            })
            
            container.appendChild(textArea)
            container.appendChild(button)
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
                        ? <><Link to={getUpdatePostLink(movieId, postId)}><Button variant="secondary">수정</Button></Link>
                        <Button onClick={deletePostFunc} variant="secondary">삭제</Button></>
                        : <><Button onClick={reportPostFunc} variant="secondary">신고</Button></>
                    }
                    <Button onClick={() => {getMovieCommunityMainLink(movieId)}} variant="secondary">목록</Button>
                    </div>
                </div>
                <hr/>
                <div className="ReplyWrapper">
                    {comments.map(comment => 
                    <div className="Reply" id={comment.id}>
                        <div className="ReplyContentWrapper">        
                            <img src={getProfile(comment.userId)} width="50rem" height="50rem" />
                            <div className="ReplyContainer">
                                <h6>{comment.userId}</h6>
                                <div class="ContentContainer" id={getContentContainer(comment.id)}>{comment.content}</div>
                            </div>
                        </div>
                        <div className="ReplyFuncWrapper">
                        {
                            getCookie("user-id") === comment.userId 
                            ?<><Link onClick={() => updateCommentClick(comment.id)}>수정</Link>
                            <Link onClick={() => {deleteComment(comment.id)}}> 삭제</Link></>
                            :<Link onClick={() => {reportCommentClick(comment.id)}}>신고</Link>
                        }
                        <Link> 답댓글</Link>       
                        </div>    
                    </div>
                    
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
import Profile  from '../assets/profile.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import '../styles/Community.css'
import { getCookie } from '../utils/Cookie';
import Api from '../utils/api/communityAPI';

class PostDetail extends Component {
    render() {

        const { movieId, boardId, postId, title, writtenTime, writer, content, comments } = this.props;
        
        const getProfile = (userId) => `http://fhdufhdu.iptime.org:8081/users/${userId}/profile`
        
        const getMovieCommunityMainLink = (movieId) => {
            if(movieId === "1")
                return `/community/free`
            else
                return `/community/movie/${movieId}`
        }

        const getUpdatePostLink = (movieId, postId) => {
            if(movieId === "1")
                return `/community/free/update/${postId}`
            else
                return `/community/movie/${movieId}/update/${postId}`
        }

        const deletePostFunc = async () => {
            await Api.deletePost(movieId, postId)
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
                        : <><Button variant="secondary">신고</Button></>
                    }
                    <Link to={getMovieCommunityMainLink(movieId)}><Button variant="secondary">목록</Button></Link>
                    </div>
                </div>
                <hr/>
                <div className="ReplyWrapper">
                    {comments.map(comment => 
                    <div className="Reply">
                        <div className="ReplyContentWrapper">        
                            <img src={getProfile(comment.userId)} width="50rem" height="50rem" />
                            <div>
                                <h6>{comment.userId}</h6>
                                {comment.content}
                            </div>
                        </div>
                        <div className="ReplyFuncWrapper">
                        {
                            getCookie("user-id") === comment.userId 
                            ?<><Link>수정</Link><Link> 삭제</Link></>
                            :<Link>신고</Link>
                        }       
                        </div>    
                    </div>
                    
                    )}
                    <hr/>
                    <div className="WriteReply">
                        
                        <img src={getProfile(getCookie('user-id'))} width="50rem" height="50rem" />
                        <div className="ReplyContentWrapper">
                            <h6>{writer}</h6>
                            <textarea/>
                        </div>                    
                        <Button variant="danger">등록</Button>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default PostDetail;
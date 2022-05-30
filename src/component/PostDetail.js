import Profile  from '../assets/profile.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import '../styles/Community.css'
import { getCookie } from '../utils/Cookie';

class PostDetail extends Component {
    render() {

        const { title, writtenTime, writer, content, comments } = this.props;
        const getProfile = (userId) => `http://fhdufhdu.iptime.org:8081/users/${userId}/profile`
  
        return (
            <div className="PostDetail">
                <div className="PostInfo">
                    <div className="TitleArea">
                        <h1>{title}</h1>
                    </div>
                    <div className="WrittenInfo">
                        작성자: {writer}
                        작성일: {writtenTime}
                    </div>
                </div>
                <hr/>
                <div className="ContentWrapper">
                    {content}
                    {
                        getCookie("user-id") === writer
                        ? <><Button variant="secondary">수정</Button>
                        <Button variant="secondary">삭제</Button></>
                        : <><Button variant="secondary">신고</Button></>
                    }
                    <Button variant="secondary">목록</Button>  
                </div>
                <hr/>
                <div className="ReplyWrapper">
                {comments.map(comment => 
                <div className="WriteReply">        
                    <img src={getProfile(comment.userId)} width="50rem" height="50rem" />
                    <div className="ReplyContentWrapper">
                         <h6>{comment.userId}</h6>
                         {comment.content}
                     </div>
                     {
                         getCookie("user-id") === comment.userId 
                         ?<><Link>수정</Link><Link>삭제</Link></>
                         :<Link>신고</Link>
                     }               
                </div>
                )}
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
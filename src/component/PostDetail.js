import Profile  from '../assets/profile.jpg'
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import '../styles/Community.css'

class PostDetail extends Component {
    render() {

        const { title, writtenTime, writer, content } = this.props;
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
            </div>
            <hr/>
            <div className="ReplyWrapper">
                <div className="WriteReply">
                    <img src={Profile} width="50rem" height="50rem" />
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
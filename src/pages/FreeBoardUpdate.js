import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import UpdateBoard from '../component/UpdateBoard';
import '../styles/Community.css'
import Api from '../utils/api/communityAPI';

const FreeBoardUpdate = ({match}) => {
    // 파라미터 정제
    const paramPostId = match.params.postId;

    const [inputTitle, setInputTitle] = useState('')
    let [inputContent, setInputContent] = useState('')
    const [post, setPost] = useState([])

    const inputTitleHandler = (e) => {
        setInputTitle(e.target.value)
    }

    const inputContentHandler = (e) => {
        setInputContent(e.target.value)
    }

    const postData = {
        "movieId": "1",
        "title": inputTitle === null ? post.title : inputTitle,
        "content": inputContent === null ? post.content : inputContent
    }

    const updateEvent = async() => {
        await Api.updatePost(paramPostId, postData, post)
    }

    const cancelEvent = () => {
        window.location.href="/community/free"
    }

    const getBoardInfo = async() => {
        setPost(await Api.getPostDetail2(paramPostId))
    }

    useEffect(async() => {getBoardInfo();}, [])

    return (
        <div>
            <Header></Header>
            <div className="FreeBoardThumb">
                <h1>자유 게시판</h1>
            </div>
            <UpdateBoard
            originTitle={post.title}
            originContent={post.content}
            movieId="1"
            boardId="1"
            titleHandler={inputTitleHandler}
            contentHandler={inputContentHandler} 
            updateEvent={updateEvent}
            cancelEvent={cancelEvent}
            ></UpdateBoard>
        </div>
    );
};

export default FreeBoardUpdate;
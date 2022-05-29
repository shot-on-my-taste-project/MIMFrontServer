import React, { useState } from 'react'
import Header from '../component/Header';
import WriteBoard from '../component/WriteBoard';
import '../styles/Community.css'
import Api from '../utils/api/communityAPI';

const FreeBoardWrite = () => {
    const [inputTitle, setInputTitle] = useState('')
    let [inputContent, setInputContent] = useState('')

    const inputTitleHandler = (e) => {
        setInputTitle(e.target.value)
    }

    const inputContentHandler = (e) => {
        setInputContent(e.target.value)
    }

    const postData = {
        "title": inputTitle,
        "content": inputContent
    }

    const enrollEvent = async() => {await Api.writeFreeBoardPost(postData)}

    const cancelEvent = () => {
        window.location.href="/community/free"
    }

    return (
        <div>
            <Header></Header>
            <div className="FreeBoardThumb">
                <h1>자유 게시판</h1>
            </div>
            <WriteBoard
            titleHandler={inputTitleHandler}
            contentHandler={inputContentHandler} 
            enrollEvent={enrollEvent}
            cancelEvent={cancelEvent}
            ></WriteBoard>
        </div>
    );
};

export default FreeBoardWrite;
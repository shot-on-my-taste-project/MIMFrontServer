import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../component/Header';
import CommunityInfo from '../component/CommunityInfo';
import Thumb from "../assets/tazza-thumb.jpg"
import UpdateBoard from '../component/UpdateBoard';
import '../styles/Community.css'
import Api from '../utils/api/communityAPI';

const BoardUpdate = ({match}) => {
  // 파라미터 정제
  const paramMovieId = match.params.movieId;
  const paramPostId = match.params.postId;

  const [board, setBoard] = useState([])
  const [post, setPost] = useState([])
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')

  const inputTitleHandler = (e) => {
    setInputTitle(e.target.value)
  }

  const inputContentHandler = (e) => {
    setInputContent(e.target.value)
  }

  const getBoardInfo = async() => {
    setBoard(await Api.getBoard(paramMovieId))
    setPost(await Api.getPostDetail2(paramPostId))
  }

  const postData = {
    "movieId": paramMovieId,
    "title": inputTitle === null ? post.title : inputTitle,
    "content": inputContent === null ? post.content : inputContent
}

  const updateEvent = async() => {
    await Api.updatePost(paramPostId, postData, post)
  }

  const cancelEvent = () => {
    window.location.href = "/community/movie/"+ paramMovieId
  }

  useEffect(() => {getBoardInfo();}, [])

    return (
        <div>
            <Header></Header>
            <CommunityInfo
            movieId={paramMovieId}
            ></CommunityInfo>
            <UpdateBoard
            originTitle={post.title}
            originContent={post.content}
            movieId={paramMovieId}
            boardId={board.id}
            titleHandler={inputTitleHandler}
            contentHandler={inputContentHandler} 
            updateEvent={updateEvent}
            cancelEvent={cancelEvent}></UpdateBoard>
        </div>
    );
};

export default BoardUpdate;
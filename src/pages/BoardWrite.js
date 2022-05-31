import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from '../component/Header';
import CommunityInfo from '../component/CommunityInfo';
import Thumb from "../assets/tazza-thumb.jpg"
import WriteBoard from '../component/WriteBoard';
import '../styles/Community.css'
import Api from '../utils/api/communityAPI';

const BoardWrite = ({match}) => {
  // 파라미터 정제
  const paramMovieId = match.params.movieId;

  const [board, setBoard] = useState([])
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
  }

  const postData = {
    "title": inputTitle,
    "content": inputContent,
    "movieBoardId": board.id,
    "movieId": paramMovieId
  }

  const enrollEvent = async() => {
    await Api.writeMovieBoardPost(postData)
  }

  const cancelEvent = () => {
    window.location.href = "/community/movie/"+ paramMovieId
  }

  useEffect(() => {getBoardInfo();}, [])
  console.log(board)

    return (
        <div>
            <Header></Header>
            <CommunityInfo
            movieId={paramMovieId}
            ></CommunityInfo>
            <WriteBoard
            titleHandler={inputTitleHandler}
            contentHandler={inputContentHandler} 
            enrollEvent={enrollEvent}
            cancelEvent={cancelEvent}></WriteBoard>
        </div>
    );
};

export default BoardWrite;
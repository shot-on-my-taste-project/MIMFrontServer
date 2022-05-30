import React, { useState, useEffect } from 'react'
import Header from '../component/Header';
import CommunityInfo from '../component/CommunityInfo';
import CustomSearchArea from '../component/CustomSearchArea';
import WriteButton from '../component/WriteButton';
import Api from "../utils/api/communityAPI"
import '../styles/Community.css'
import PostDetail from '../component/PostDetail';

const PostMovie = ({match}) => {
    // 파라미터 정제
    const paramMovieId = match.params.movieId;
    const paramPostId = match.params.postId;

    const [board, setBoard] = useState([])
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    
    const getPost = async() => {
        setBoard(await Api.getBoard(paramMovieId).then(async x => {
            setPost(await Api.getPostDetail(x.id, paramPostId))
            setComments(await Api.getAllComments(x.id, paramPostId))
            return x;
        }))
    }
    const getWritePostLink = (movieId) => `/community/movie/write/${movieId}`;


    useEffect(async() => await getPost(), [])

    return (
        <div className="CommunityMovieContainer">
            <Header></Header>
            <CommunityInfo
            movieId={paramMovieId}
            ></CommunityInfo>
            
            <div className="SubSearchArea">
                <CustomSearchArea />
                <WriteButton moveTo={ getWritePostLink(paramMovieId) }/>
            </div>

            <div className="PostContent">
                <PostDetail
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

export default PostMovie;
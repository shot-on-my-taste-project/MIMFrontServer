import React, { useState, useEffect } from 'react'
import ReportButton from '../component/ReportButton';
import FavoriteButton from '../component/FavoriteButton';
import '../styles/Community.css'
import Api from '../utils/api/searchAPI';
import Api2 from '../utils/api/communityAPI';

const CommunityInfo = (props) => {
    const { movieId } = props
    const [movie, setMovie] = useState([])
    const [board, setBoard] = useState([])

    const getBackground = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/background`;
    
    const getMovieInfo = async() => {
        setMovie(await Api.getResultDetail(movieId).then(async x => {
            const board_ = await Api2.getBoard(movieId)
            setBoard(board_)
            return x.movieDto
        }))
    }

    useEffect(async() => {getMovieInfo()}, []);
  
    return (
        <>
            <img className="ThumbImg" src={ getBackground(movieId) } width={"100%"} height={"50%"}/>
           <div className="BoardInfo">
               <div className="Text">
                 <h1>{ movie.title }</h1><h4>{board.lastPostingNumber}개의 게시글</h4>
               </div>
               <div className="Btn">
                 <ReportButton />
                 <FavoriteButton />
               </div>
               
           </div>
        </>
    );
};

export default CommunityInfo;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ReportButton from '../component/ReportButton';
import FavoriteButton from '../component/FavoriteButton';
import '../styles/Community.css'
import Api from '../utils/api/searchAPI';
import Api2 from '../utils/api/communityAPI';

const CommunityInfo = (props) => {
    const { movieId } = props
    const [movie, setMovie] = useState([])
    const [board, setBoard] = useState([])
    const [isFavorite, setIsFavorite] = useState(false)

    const getBackground = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/background`;
    const getCommunityLink = (movieId) => `/community/movie/${movieId}`;

    const getMovieInfo = async() => {
        setIsFavorite(await Api2.isFavoriteMovie(movieId))
        setMovie(await Api.getResultDetail(movieId).then(async x => {
            const board_ = await Api2.getBoard(movieId)
            setBoard(board_)
            return x.movieDto
        }))
    }
    
    const addFavoriteMovie = async() => {
        await Api2.addFavoriteMovie(movieId)
        alert('즐겨찾기 항목에 추가되었습니다.')
    }
    
    const deleteFavoriteMovie = async() => {
        await Api2.deleteFavoriteMovie(movieId)
        alert('즐겨찾기 항목에서 삭제되었습니다.')
    }

    useEffect(async() => {await getMovieInfo();}, []);
  
    return (
        <>
            <img className="ThumbImg" src={ getBackground(movieId) } width={"100%"} height={"50%"}/>
           <div className="BoardInfo">
               <div className="Text">
                 <Link style={{textDecoration: 'none', color: 'white'}} to={getCommunityLink(movieId)}><h1>{ movie.title }</h1></Link><h4>{board.lastPostingNumber}개의 게시글</h4>
               </div>
               <div className="Btn">
                 <ReportButton />
                 <FavoriteButton 
                 isFavorite={isFavorite}
                 activateAction={addFavoriteMovie}
                 deactivateAction={deleteFavoriteMovie}
                 />
               </div>
               
           </div>
        </>
    );
};

export default CommunityInfo;
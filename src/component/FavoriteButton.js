import FavoriteActivate  from '../assets/favorite-activate.png'
import FavoriteDeactivate  from '../assets/favorite-deactivate.png'
import React, { useState } from 'react';
import { getCookie } from '../utils/Cookie';
import Api from '../utils/api/communityAPI';

const FavoriteButton = (props) => {
  const { movieId } = props
  const [ bookMarkIcon, setBookMarkIcon ] = useState(false);
  const handleClick = () => {
    setBookMarkIcon(!bookMarkIcon);
  }

  const goToLogin = () => {
    window.location.href = "/login"
  }

  const addFavoriteData = {
    "movieId": movieId,
    "userId": getCookie("user-id")
  }

  const addFavoriteMovie = async() => {
    await Api.addFavoriteMovie(addFavoriteData)
    alert('즐겨찾기 항목에 추가되었습니다.')
  }

  const deleteFavoriteMovie = () => {
    alert('즐겨찾기 항목에서 삭제되었습니다.')
  }

  if(getCookie('user-id')!= null) {
    return (
      <div className="FavoriteButton">
          {bookMarkIcon === true ? (
            <img onClick={() => { handleClick(); deleteFavoriteMovie() }} src={ FavoriteActivate } width={"60rem"} height={"60rem"}/>
          ) : (
            <img onClick={() => { handleClick(); addFavoriteMovie() }} src={ FavoriteDeactivate } width={"60rem"} height={"60rem"}/>
          )} 
      </div>
    );
  } else {
    return (
      <div className="FavoriteButton">
        <img onClick={goToLogin} src={ FavoriteDeactivate } width={"60rem"} height={"60rem"}/>
      </div>
    );
  }
}
  
  
export default FavoriteButton;
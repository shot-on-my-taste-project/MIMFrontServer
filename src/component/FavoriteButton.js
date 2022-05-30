import FavoriteActivate  from '../assets/favorite-activate.png'
import FavoriteDeactivate  from '../assets/favorite-deactivate.png'
import React, { useEffect, useState } from 'react';
import { getCookie } from '../utils/Cookie';

const FavoriteButton = (props) => {
  const { isFavorite, activateAction, deactivateAction } = props
  
  const goToLogin = () => {
    window.location.href = "/login"
  }

  if(getCookie('user-id')!= null) {
    return (
      <div className="FavoriteButton">
          {isFavorite ? (
            <img onClick={ deactivateAction } src={ FavoriteActivate } width={"60rem"} height={"60rem"}/>
          ) : (
            <img onClick={ activateAction } src={ FavoriteDeactivate } width={"60rem"} height={"60rem"}/>
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
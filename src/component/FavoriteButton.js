import FavoriteActivate  from '../assets/favorite-activate.png'
import FavoriteDeactivate  from '../assets/favorite-deactivate.png'
import React, { Component, useState } from 'react';

const FavoriteButton = () => {
  const [ bookMarkIcon, setBookMarkIcon ] = useState(false);
  // const onClick = setBookMarkIcon(!bookMarkIcon);
  const handleClick = () => {
    setBookMarkIcon(!bookMarkIcon);
  }

  return (
    <div className="FavoriteButton">
        {bookMarkIcon === true ? (
          <img onClick={handleClick} src={ FavoriteActivate } width={"60rem"} height={"60rem"}/>
        ) : (
          <img onClick={handleClick} src={ FavoriteDeactivate } width={"60rem"} height={"60rem"}/>
        )}
            
    </div>
  );
}
  
  
export default FavoriteButton;
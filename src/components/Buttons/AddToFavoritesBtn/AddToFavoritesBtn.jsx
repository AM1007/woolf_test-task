import React, { useState } from 'react';
import { FavoritesBtn } from './AddToFavoritesBtn.styled';
import Icon from 'components/Icon/Icon';

const AddToFavoritesBtn = ({ onAddToFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorites(isFavorite);
  };

  return (
    <FavoritesBtn
      title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      onClick={handleClick}
    >
      <Icon
        name="heart"
        width="24"
        height="24"
        fill={isFavorite ? '#E44848' : 'transparent'}
        stroke={isFavorite ? '#E44848' : '#101828'}
      />
    </FavoritesBtn>
  );
};

export default AddToFavoritesBtn;

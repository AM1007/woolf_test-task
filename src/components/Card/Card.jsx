import React from 'react';
import {
  CardTitle,
  Img,
  Item,
  Price,
  TitleContainer,
  CardInfoWrap,
  SubtitleWrap,
  Subtitle,
  Description,
  CharsWrap,
  Char,
} from './Card.styled';
import AddToFavoritesBtn from 'components/Buttons/AddToFavoritesBtn/AddToFavoritesBtn';
import Icon from '../Icon/Icon';
import ShowBtn from 'components/Buttons/ShowBtn/ShowBtn';
import noImage from 'assets/noimage.png';

const Card = ({ camper, showModal }) => {
  const {
    gallery,
    name,
    price,
    rating,
    location,
    reviews,
    description,
    adults,
    transmission,
    engine,
    details,
  } = camper;

  const handleAddToFavorites = isFavorite => {
    // Добавить логику компонента в избранное
    if (isFavorite) {
      console.log('Removed from favorites');
    } else {
      console.log('Added to favorites');
    }
  };

  const handleClick = () => {
    // Логика открытия модалки
    showModal();
    console.log('Button clicked');
  };

  return (
    <Item>
      <Img src={gallery ? gallery[0] : noImage} alt={name} />
      <CardInfoWrap>
        <TitleContainer>
          <CardTitle>{name}</CardTitle>
          <Price>
            €{price}.00
            <AddToFavoritesBtn onAddToFavorites={handleAddToFavorites} />
          </Price>
        </TitleContainer>
        <SubtitleWrap>
          <Icon
            name="star"
            width="16"
            height="16"
            fill="#FFC531"
            stroke="#FFC531"
          />
          <Subtitle $underline="true">
            {rating} ({reviews.length} Rewiews)
          </Subtitle>
          <Icon
            name="location"
            width="16"
            height="16"
            fill="transparent"
            stroke="#101828"
          />
          <Subtitle $marginRight="0px">{location}</Subtitle>
        </SubtitleWrap>
        <Description>{description}</Description>
        <CharsWrap>
          <Char>
            <Icon name="users" width="20" height="20" fill="#101828" />
            {adults} adults
          </Char>
          <Char>
            <Icon
              name="automatic"
              width="20"
              height="20"
              fill="transparent"
              stroke="#101828"
            />
            {transmission.charAt(0).toUpperCase() + transmission.slice(1)}
          </Char>
          <Char>
            <Icon name="petrol" width="20" height="20" fill="#101828" />
            {engine.charAt(0).toUpperCase() + engine.slice(1)}
          </Char>
          {details.kitchen > 0 && (
            <Char>
              <Icon
                name="kitchen"
                width="20"
                height="20"
                fill="transparent"
                stroke="#101828"
              />
              Kitchen
            </Char>
          )}
          <Char>
            <Icon
              name="beds"
              width="20"
              height="20"
              fill="transparent"
              stroke="#101828"
            />
            {details.beds} beds
          </Char>
          {details.airConditioner > 0 && (
            <Char>
              <Icon
                name="airConditioner"
                width="20"
                height="20"
                fill="#101828"
                stroke="#101828"
              />
              AC
            </Char>
          )}
        </CharsWrap>
        <ShowBtn onClick={handleClick}>Show more</ShowBtn>
      </CardInfoWrap>
    </Item>
  );
};

export default Card;

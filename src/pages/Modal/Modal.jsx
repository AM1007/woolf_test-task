import { useState } from 'react';
import CloseBtn from 'components/Buttons/CloseBtn/CloseBtn';
import {
  Backdrop,
  BtnContainer,
  ContentBtn,
  Description,
  Dialog,
  Ul,
} from './Modal.styled';
import {
  CardTitle,
  Img,
  Price,
  Subtitle,
  SubtitleWrap,
  TitleContainer,
} from 'components/Card/Card.styled';
import Icon from 'components/Icon/Icon';
import noImage from 'assets/noimage.png';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';

const Modal = ({ camper, hideModal }) => {
  const { name, price, rating, location, reviews, gallery, description } =
    camper;

  const [activeTab, setActiveTab] = useState('features');

  const renderContent = () => {
    switch (activeTab) {
      case 'features':
        return <Features camper={camper} />;
      case 'reviews':
        return <Reviews reviews={reviews} />;
      default:
        return null;
    }
  };

  return (
    <Backdrop onClick={hideModal}>
      <Dialog onClick={e => e.stopPropagation()}>
        <TitleContainer>
          <CardTitle>{name}</CardTitle>
          <CloseBtn onClick={hideModal}>Close</CloseBtn>
        </TitleContainer>
        <SubtitleWrap $marginBottom="16px">
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
        <Price $marginBottom="24px">€{price}.00</Price>
        <Ul>
          <li>
            <Img
              src={gallery ? gallery[0] : noImage}
              alt={name}
              className="modal-img"
            />
          </li>
          <li>
            <Img
              src={gallery ? gallery[1] : noImage}
              alt={name}
              className="modal-img"
            />
          </li>
          <li>
            <Img
              src={gallery ? gallery[2] : noImage}
              alt={name}
              className="modal-img"
            />
          </li>
        </Ul>
        <Description>{description}</Description>
        <BtnContainer>
          <ContentBtn
            className={activeTab === 'features' ? 'active' : ''}
            onClick={() => setActiveTab('features')}
          >
            Features
          </ContentBtn>
          <ContentBtn
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </ContentBtn>
        </BtnContainer>
        {renderContent()}
      </Dialog>
    </Backdrop>
  );
};

export default Modal;

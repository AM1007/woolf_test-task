import CloseBtn from 'components/Buttons/CloseBtn/CloseBtn';
import { Backdrop, Description, Dialog, Ul } from './Modal.styled';
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

const Modal = ({ camper, hideModal }) => {
  const { name, price, rating, location, reviews, gallery, description } =
    camper;

  return (
    <Backdrop>
      <Dialog>
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
            <Img src={gallery ? gallery[0] : noImage} alt={name} hoverEffect />
          </li>
          <li>
            <Img src={gallery ? gallery[1] : noImage} alt={name} hoverEffect />
          </li>
          <li>
            <Img src={gallery ? gallery[2] : noImage} alt={name} hoverEffect />
          </li>
        </Ul>
        <Description>{description}</Description>
      </Dialog>
    </Backdrop>
  );
};

export default Modal;

import React, { useRef } from 'react';
import { Char } from 'components/Card/Card.styled';
import {
  Container,
  DetailLi,
  Details,
  DetailsUl,
  FeaturesUl,
  FeaturesWrap,
  FeaturesForm,
  TitleDetails,
} from './Features.styled';
import Icon from 'components/Icon/Icon';
import ModalForm from 'components/ModalForm/ModalForm';

const Features = ({ camper }) => {
  const { details, form, length, width, height, tank, consumption } = camper;
  //реф (ref) для получения доступа к DOM-элементу.
  const formRef = useRef(null);

  return (
    <Container>
      <Details>
        <FeaturesWrap>
          <FeaturesUl>
            {Object.entries(details).map(([key, value]) => {
              if (value === 0) return null;
              return (
                <li key={key}>
                  <Char>
                    <Icon name={key} width="20" height="20" />
                    {value > 1 ? `${value} ${key}` : key}
                  </Char>
                </li>
              );
            })}
          </FeaturesUl>

          <TitleDetails>Vehicle details</TitleDetails>
          <DetailsUl>
            <DetailLi>
              <span>Form</span>
              <span>
                {form
                  .replace(/([a-z])([A-Z])/g, '$1 $2')
                  .replace(/^\w/, c => c.toUpperCase())}
              </span>
            </DetailLi>
            <DetailLi>
              <span>Length</span>
              <span>{length.replace(/([0-9]+)([a-zA-Z]+)/, '$1 $2')}</span>
            </DetailLi>
            <DetailLi>
              <span>Width</span>
              <span>{width.replace(/([0-9]+)([a-zA-Z]+)/, '$1 $2')}</span>
            </DetailLi>
            <DetailLi>
              <span>Height</span>
              <span>{height.replace(/([0-9]+)([a-zA-Z]+)/, '$1 $2')}</span>
            </DetailLi>
            <DetailLi>
              <span>Tank</span>
              <span>{tank.replace(/([0-9]+)([a-zA-Z]+)/, '$1 $2')}</span>
            </DetailLi>
            <DetailLi>
              <span>Consumption</span>
              <span>{consumption}</span>
            </DetailLi>
          </DetailsUl>
        </FeaturesWrap>
      </Details>
      <FeaturesForm ref={formRef}>
        <ModalForm formRef={formRef} />
      </FeaturesForm>
    </Container>
  );
};

export default Features;

import styled from 'styled-components';
import Icon from 'components/Icon/Icon';

export const ReviewsUl = styled.ul`
  list-style: none;
  margin: 0;
`;

export const ListWrapper = styled.div`
  /* border: 1px solid blue; */
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
`;

export const Capital = styled.div`
  background: #f2f4f7;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #e44848;
`;

export const ReviewsName = styled.h3`
  margin-bottom: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: #101828;
`;

export const ReviewsDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`;

export const ListItem = styled.li`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StarIcon = styled(Icon)`
  fill: ${props => props.fill};
`;

export const RatingUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const RatingItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;
